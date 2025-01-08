// frontend/src/components/Layout.js
import TravelInStyleLayout from './TravelInStyleLayout';
import FlussLayout from './FlussLayout';
// Import other layouts

const Layout = ({ children, layoutType }) => {
  switch (layoutType) {
    case 'style1':
      return <TravelInStyleLayout>{children}</TravelInStyleLayout>;
    case 'style2':
      return <FlussLayout>{children}</FlussLayout>;
  }
};

export default Layout;
