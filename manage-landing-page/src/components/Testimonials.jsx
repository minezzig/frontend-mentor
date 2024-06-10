import styles from "../styles/Testimonials.module.css";
import avatar1 from "../assets/images/avatar-anisha.png";
import avatar2 from "../assets/images/avatar-ali.png";
import avatar3 from "../assets/images/avatar-richard.png";
import avatar4 from "../assets/images/avatar-shanai.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css/bundle";

export default function Testimonials() {
  return (
    <div className={styles.fullWidth}>
      <div className={styles.title}> What they’ve said</div>
      <div className={styles.cardsContainer}>
        <Swiper
          init={false}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          centeredSlides={true}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2,}
          }}
          loop="true"
          className={styles.mySlider}
        >
          <SwiperSlide className={styles.slide}>
            <div className={styles.card}>
              <img src={avatar1} alt="" />
              <div className={styles.name}>Anisha Li</div>
              <p>
                “Manage has supercharged our team’s workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated.”
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.slide}>
            <div className={styles.card}>
              <img src={avatar2} alt="" />
              <div className={styles.name}>Ali Bravo</div>
              <p>
                “We have been able to cancel so many other subscriptions since
                using Manage. There is no more cross-channel confusion and
                everyone is much more focused.”
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.slide}>
            <div className={styles.card}>
              <img src={avatar3} alt="" />
              <div className={styles.name}>Richard Watts</div>
              <p>
                “Manage allows us to provide structure and process. It keeps us
                organized and focused. I can’t stop recommending them to
                everyone I talk to!”
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.slide}>
            <div className={styles.card}>
              <img src={avatar4} alt="" />
              <div className={styles.name}>Shanai Gough</div>
              <p>
                “Their software allows us to track, manage and collaborate on
                our projects from anywhere. It keeps the whole team in-sync
                without being intrusive.”
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={styles.btnDiv}>
        <button>Get Started</button>
      </div>
    </div>
  );
}
