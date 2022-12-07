import { useState, lazy, Suspense } from "react";
import AppHeader from "./component/AppHeader/AppHeader";
import AppFooter from "./component/AppFooter/AppFooter";
import AppBody from "./component/AppBody/AppBody";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./component/utils/Theme";
import Sidemenu from "./component/AppHeader/Sidemenu";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import IdPage  from "./pages/IdPage/IdPage"
import PageNotFound from "./pages/404/PageNotFound";
import Dashboard from "./pages/dashboard/Dashboard";

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
 

const queryClient = new QueryClient()


// import Loader from "./component/loader/Loader";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vw;
  min-width: 300px;
  width: 99%;
  max-height: 100vh;
  background-color: ${({ theme }) => theme.bgLighter};
`;

const BodyWrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: ${({ theme }) => theme.bgLighter};

  @media (max-width: 500px) {
    padding: 10px 20px;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
  }
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [open, setOpen] = useState(false);
  return (
    <>
         <QueryClientProvider client={queryClient}> 
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Container>
          <BrowserRouter>
            <AppHeader
              open={open}
              setOpen={setOpen}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
            <BodyWrapper>
              <Suspense fallback={<h1>..loading</h1>}>
                <Routes>
                  <Route path="/">
                    <Route index element={<AppBody />} />
                    <Route path="/about" element={<About  />} />
                    <Route path="/contact" element={<Contact    />} />
                    <Route path="/offer/:id" element={<IdPage />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="*" element={<PageNotFound />} />
                  </Route>
                </Routes>
              </Suspense>
            </BodyWrapper>
            <AppFooter />
          </BrowserRouter>
          {open && (
            <Sidemenu
              open={open}
              setOpen={setOpen}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          )}
        </Container>
      </ThemeProvider>
      </QueryClientProvider>
      <ToastContainer
       
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
       
   
        // toastClassName={css({ fontFamily: "Cairo" })}
      />
    </>
  );
}

export default App;
