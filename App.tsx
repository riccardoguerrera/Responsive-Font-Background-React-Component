import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { NavBar } from "@/shared/index";
import {
    CartPage,
    CheckoutPage,
    CMSOrdersPage,
    CMSPage,
    CMSProductsPage,
    LoginPage,
    ShopPage,
    ThanksPage
} from "./pages";

import {DndPage} from "./pages/dnd/DndPage.tsx";
import {DndRacesPage} from "./pages/dnd/races/DndRacesPage.tsx";
import {DndAlignmentPage} from "./pages/dnd/alignment/DndAlignmentPage.tsx";
import {DndSubRacesPage} from "./pages/dnd/races/subraces/DndSubRacesPage.tsx";
import {DndDescentsPage} from "./pages/dnd/races/descents/DndDescentsPage.tsx";
import {DndEthnicsPage} from "./pages/dnd/races/ethnics/DndEthnicsPage.tsx";


function App() {
  return (
    <>
        <BrowserRouter>
            <NavBar />
            <section className="page">
                <Routes>
                    <Route path="shop" element={<ShopPage />} />
                    <Route path="cart" element={<CartPage />} />
                    <Route path="checkout" element={<CheckoutPage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="thankyou" element={<ThanksPage />} />

                    <Route path="cms" element={<CMSPage />}>
                        <Route path="products" element={ <CMSProductsPage /> } />
                        <Route path="orders" element={ <CMSOrdersPage /> } />
                        { /* <Route index element={ <Navigate to="products" /> } /> */ }
                    </Route>

                    <Route path="dnd" element={<DndPage />}>
                        <Route path="races" element={ <DndRacesPage /> } />
                        <Route path="races/:raceid/subraces" element={ <DndSubRacesPage /> } />
                        <Route path="races/:raceid/ethnics" element={ <DndEthnicsPage /> } />
                        <Route path="races/:raceid/descents" element={ <DndDescentsPage /> } />
                        <Route path="alignment" element={ <DndAlignmentPage /> } />
                    </Route>

                    <Route path="*" element={<Navigate to="shop" />} />
                </Routes>
            </section>
        </BrowserRouter>
    </>
  )
}

export default App