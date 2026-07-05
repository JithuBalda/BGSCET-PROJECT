// interface SectionHeadingProps {
//   eyebrow?: string;
//   title: string;
//   subtitle?: string;
//   center?: boolean;
//   light?: boolean;
// }

// function SectionHeading({ eyebrow, title, subtitle, center = false, light = false }: SectionHeadingProps) {
//   return (
//     <div className={`section-heading ${center ? 'text-center mx-auto' : ''} ${light ? 'light' : ''}`}>
//       {eyebrow && <span className="section-eyebrow d-inline-block">{eyebrow}</span>}
//       <h2 className="section-title mb-3">{title}</h2>
//       {subtitle && <p className="section-subtitle mb-0">{subtitle}</p>}
//     </div>
//   );
// }

// export default SectionHeading;


{/* 
import './SectionHeading.css';
interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
  underline?: boolean;
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
  light = false,
  underline = true,
}: SectionHeadingProps) {
  return (
    <div
      className={[
        'section-heading',
        center ? 'text-center mx-auto' : '',
        light ? 'light' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {eyebrow && (
        <span className="section-eyebrow">
          {eyebrow}
        </span>
      )}

      <div className="section-title-wrapper">
        <h2 className="section-title">{title}</h2>

        {underline && (
          <span className="section-heading-line" />
        )}
      </div>

      {subtitle && (
        <p className="section-subtitle">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;

*/}


import './SectionHeading.css';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
  underline?: boolean;
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
  light = false,
  underline = true,
}: SectionHeadingProps) {
  return (
    <div
      className={[
        'shared-section-heading',
        center ? 'shared-section-heading--center' : 'shared-section-heading--left',
        light ? 'shared-section-heading--light' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {eyebrow && (
        <span className="section-eyebrow">
          {eyebrow}
        </span>
      )}

      <div className="section-title-wrapper">
        <h2 className="section-title">{title}</h2>

        {underline && (
          <span className="section-heading-line"></span>
        )}
      </div>

      {subtitle && (
        <p className="section-subtitle">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
