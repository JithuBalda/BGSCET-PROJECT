// export interface AboutMuttData {
//   title: string;
//   description: string[];
// }

// export const aboutMutt: AboutMuttData = {
//   title: "About Mutt",
//   description: [
//     "Sri Adichunchanagiri Mahasamsthana Mutt, with its roots firmly embedded in the folds of time (1500 Years), situated on Rocky Hill, 63 miles west of Bangalore, the capital city of Karnataka, has been working towards the betterment of human life and society. Sri Kshetra Adichunchanagiri has a history spanning nearly 2000 years. It is a holy land engulfed with divine resonance and vibration. Ancient Vedic culture flourished here on the foundation of spirituality, where nature is valued and worshipped. Yagnas and prayers performed here have inspired cosmic peace for generations.",

//     "Sri Kshetra is blessed by Lord Shiva. According to tradition, Lord Shiva performed penance at Sri Kshetra, during which He destroyed the demons Chuncha and Kancha, who had been tormenting the region. At the end of His austerities, Lord Shiva entrusted a Siddayogi with the responsibility of establishing the Natha tradition and spreading righteousness throughout society.",

//     "Lord Shiva also assured His eternal presence at Sri Kshetra Adichunchanagiri in the form of the Panchalingas—Gangadhareshwaraswamy, Chandramouleshwaraswamy, Malleshwaraswamy, Siddeshwaraswamy, and Someshwaraswamy. Among them, Lord Gangadhareshwaraswamy is worshipped as the Presiding Deity, giving Sri Kshetra the revered name 'Panchalinga Kshetra'.",

//     "Lord Kalabhyraveshwaraswamy, another manifestation of Lord Shiva, is worshipped as the Protecting Deity of Sri Kshetra. He blesses devotees with divine grace, spiritual experience, and liberation. Goddess Parvathi resides here in the sacred form of Stambambike.",

//     "Sri Mutt serves free food to more than twenty thousand devotees every day. This noble service has earned it the affectionate title 'Annadani Mutt'. The sacred Bindu Sarovara, naturally formed on the hill, is believed to contain holy waters flowing from the locks of Lord Gangadhareshwara. Devotees take a holy dip in this sacred lake seeking purification and spiritual upliftment.",

//     "Sri Kshetra is surrounded by a beautiful forest radiating serenity, spiritual solitude, and peace. This region is popularly known as 'Mayura Vana', where peacocks roam freely, adding to the natural beauty and spiritual atmosphere.",

//     "Millions of devotees look to this ancient monastery for spiritual guidance and social upliftment. Along with preserving spirituality, Sri Kshetra continues its mission of empowering rural communities through education, healthcare, and humanitarian service."
//   ]
// };
import type { ReactNode } from "react";

export interface AboutMuttData {
  title: string;
  description: ReactNode[];
}

export const aboutMutt: AboutMuttData = {
  title: "About Mutt",

  description: [
    <>
      <strong>Sri Adichunchanagiri Mahasamsthana Mutt</strong>, with its roots
      firmly embedded in the folds of time (1500 Years), Space on Rocky Hill,
      63 miles West of Bangalore, the Capital City of Karnataka, has been
      working towards the betterment of human life and society.
      
      <br />
      Sri Kshetra Adichunchanagiri has a history of 2000 years
      of its existence. It is the holy land engulfed with the divine resonance
      and vibration. Ancient Vedic culture was founded here on spirituality,
      where Nature is valued and worshipped. It was Yagnas and prayers that
      inspired cosmic peace here.
    </>,

    <>
      Sri Kshetra is blessed by Lord Shiva. Lord Shiva
      performed penance at Sri Kshetra, during which he devoured two demons,
      Chuncha and Kancha, who were pestering elements of the area for a very
      long time. At the end of his austerity, Lord Shiva entrusted a Siddayogi,
      establishing a "Natha tradition" and guided him to disseminate the
      righteousness in the society.
    </>,

    <>
     Lord Shiva also assured to reside in Sri Kshetra
      Adichunchanagiri, in the form of Panchalingas viz. Lord
      Gangadhareshwaraswamy, Chandramouleshwaraswamy,
      Malleshwaraswamy, Siddeshwaraswamy and Someshwaraswamy; of which
      Lord Gangadhareshwaraswamy is known as the "Presiding Deity".
      Thus, Sri Kshetra came to be known as
       "Panchalinga Kshetra".
    </>,

    <>
      Lord Kalabhyraveshwaraswamy, the manifestation of Lord
      Shiva, is the "Protecting Deity" of Sri Kshetra. He extends his grace to
      all and bestows divine experience and liberation. Goddess Parvathi
      resides here in the form of Stambambike.
    </>,

    <>
      Sri Mutt serves free food to more than twenty thousand
      people every day. This feeding programme has earned the Mutt another name
      –<strong> "Annadani Mutt"</strong>.
      <br />
      "Bindu Sarovara" is formed naturally on the middle hill
      of Sri Kshetra. It is believed that this holy place is formed by the holy
      water discharged by the Jata of Lord Gangadhareshwara, who is stationed a
      few hundred feet high above this lake. Dedicated devotees take a holy dip
      to dispel their ignorance and accumulated sins.
    </>,

    <>
      Sri Kshetra is surrounded by a beautiful forest, which
      appears to radiate an aura of abiding serenity, spiritual solitude and
      peace. This area is known as "Mayura Vana", where
      enchanting peacocks live freely.
    </>,

    <>
      Millions look to this ancient Monastery, for both spiritual and mundane
      guidance. Apart from teaching spirituality,
       Sri Kshetra is set out to uplift the rural community
      through education and healthcare programmes – the two most pressing needs
      of the society.
    </>
  ]
};