"""One-shot script: generate a Pinterest-aesthetic bride & groom illustration
for the wedding invitation hero. Saves output to
/app/frontend/public/couple/hero-illustration.png"""
import asyncio
import base64
import os
from pathlib import Path
from dotenv import load_dotenv
from emergentintegrations.llm.chat import LlmChat, UserMessage

load_dotenv("/app/backend/.env")

PROMPT = (
    "Editorial romantic Indian wedding illustration in a delicate Pinterest "
    "mood-board aesthetic. Full-length portrait of a young Indian bride and "
    "groom standing side by side, softly holding hands. "
    "The GROOM wears a regal OFF-WHITE / IVORY sherwani with subtle antique "
    "gold embroidery on the collar and hem, ivory churidar, and beige mojari "
    "shoes. He has a well-groomed short beard and gentle smile. "
    "The BRIDE wears a stunning RANI-PINK (deep magenta-pink) lehenga with "
    "intricate gold zari and sequin embroidery, matching pink dupatta draped "
    "elegantly over her head, delicate maang tikka, statement gold and pearl "
    "jhumkas, choker necklace, henna on her hands, and a soft radiant smile. "
    "Background: soft ivory / cream watercolor wash with delicate marigold "
    "florals, mango leaves, and a hint of a golden diya glow — no harsh "
    "colors. Aesthetic: semi-realistic hand-illustrated storybook style, "
    "not photorealistic. Soft lighting, dreamy Pinterest wedding editorial "
    "vibe. Portrait orientation 3:4. High detail on outfit embroidery. "
    "Transparent-friendly ivory background (no busy scenery)."
)


async def main():
    api_key = os.getenv("EMERGENT_LLM_KEY")
    if not api_key:
        raise SystemExit("EMERGENT_LLM_KEY missing")

    chat = LlmChat(
        api_key=api_key,
        session_id="isha-himanshu-hero",
        system_message="You are an expert wedding illustrator.",
    )
    chat.with_model("gemini", "gemini-3.1-flash-image-preview").with_params(
        modalities=["image", "text"]
    )

    msg = UserMessage(text=PROMPT)
    text, images = await chat.send_message_multimodal_response(msg)
    print("text-len:", len(text or ""))

    if not images:
        raise SystemExit("No image returned")

    out_dir = Path("/app/frontend/public/couple")
    out_dir.mkdir(parents=True, exist_ok=True)
    out = out_dir / "hero-illustration.png"
    out.write_bytes(base64.b64decode(images[0]["data"]))
    print("saved:", out, out.stat().st_size, "bytes")


if __name__ == "__main__":
    asyncio.run(main())
