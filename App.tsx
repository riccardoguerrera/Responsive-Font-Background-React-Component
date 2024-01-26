import {ShopPage} from "./pages";


function App() {
  return (
    <>
        <BrowserRouter>
            <NavBar />
            <section className="page">
                <Routes>
                    <Route path="shop" element={<ShopPage />} />
                    <Route path="*" element={<Navigate to="shop" />} />
                </Routes>
            </section>
        </BrowserRouter>
    </>
  )
}

export default App
