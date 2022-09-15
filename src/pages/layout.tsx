import { Outlet } from 'react-router-dom';
import { Page, Footer, Main, TopNav } from 'govuk-react';

const Layout = () => {
  return (
    <>
      <Page
        header={
          <TopNav>
            <TopNav.NavLink href='/'>Homepage</TopNav.NavLink>
            <TopNav.NavLink href='/form'>Form</TopNav.NavLink>
          </TopNav>
        }
        footer={<Footer></Footer>}
      >
        <Main>
          <Outlet />
        </Main>
      </Page>
    </>
  );
};

export default Layout;
