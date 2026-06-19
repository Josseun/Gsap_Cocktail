import { useGSAP } from "@gsap/react";
import { openingHours, socials } from "../../constants";
import gsap from "gsap";
import { SplitText } from "gsap/all";

function Contact() {
  useGSAP(() => {
    const titleSpilt = SplitText.create("#contact h2", { type: "words" });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      ease: "power1.inOut",
    });

    timeline
      .from(titleSpilt.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })

      .from("#contact h3, contact p", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })

      .to("#f-right-leaf", {
        y: "-50",
        duration: 1,
        ease: "power1.inOut",
      })
      .to(
        "#f-left-leaf",
        {
          y: "-50",
          duration: 1,
          ease: "power1.inOut",
        },
        "<",
      );
  });

  return (
    <footer id="contact">
      <img
        src="/images/footer-right-leaf.png"
        alt="right-leaf"
        id="f-right-leaf"
      />
      <img
        src="/images/footer-left-leaf.png"
        alt="left-leaf"
        id="f-left-leaf"
      />

      <div className="content">
        <h2>Where to find us</h2>

        <div>
          <h3>Visit our store</h3>
          <p>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
        </div>

        <div>
          <h3>Contact us</h3>
          <p>(555) 987-6543</p>
          <p>hello@jsmcocktail.com</p>
        </div>

        <div>
          <h3>Open every day</h3>
          {openingHours.map(({ day, time }) => (
            <p key={day}>
              {day}: {time}
            </p>
          ))}
        </div>

        <div>
          <h3>Socials</h3>

          <div className="flex-center gap-5">
            {socials.map(({ icon, name, url }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
              >
                <img src={icon} alt="" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
