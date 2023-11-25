import React from "react";
import VerticalCard from "../../components/VerticalCard";

const About = () => {
  return (
    <>
      <main>
        <section className="py-5 text-center bg-light">
          <div className="row py-lg-5">
            <div className="col-lg-8 col-md-8 mx-auto">
              <h1 className=" text-primary">
                <strong>ABOUT US</strong>
              </h1>
              <p className="my-3 px-4 text-body">
                Mind Land merupakan pusat kesehatan mental di era digital.
                Aplikasi konsultasi dan tes psikologi untuk edukasi dan
                dukungan. Artikel kami mendorong perawatan mental sebagaimana
                fisik. Harapan baru, pemahaman diri, langkah awal pemulihan.
                Komunitas diskusi, dukungan, kesehatan mental lebih baik.
              </p>
            </div>
          </div>
        </section>

        <section className="py-3">
          <div className="row py-lg-5">
            <div className="col-lg-8 col-md-8 mx-auto">
              <h1 className="text-primary">
                <strong>TEAM</strong>
              </h1>
              <div className="py-5 d-flex flex-wrap align-items-center">
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
