'use client';

interface ContainerProps {
  styles?: string;
  bgcolor?: string;
  children: React.ReactNode;
  centerX?: boolean;
  centerY?: boolean;
}

const Container = ({ children, styles, bgcolor, centerX, centerY }: ContainerProps) => {
  return (
    <div
      className={`
                max-w-screen-xl
                mx-auto
                xl:px-20
                md:px-10
                sm:px-4
                px-4
                ${styles || 'h-full'}
                ${bgcolor || ''}
                ${(centerX || centerY) && 'flex flex-col'}
                ${centerX && 'items-center'}
                ${centerY && 'justify-center'}
                `}
    >
      {children}
    </div>
  );
};
export default Container;
