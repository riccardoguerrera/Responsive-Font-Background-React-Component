import PocketBase from 'pocketbase';
import { BgPageTitle } from "@/shared/components/core/BgPageTitle.tsx";
import { Product } from "@/model/product.ts";

export const pb = new PocketBase('https://db.dndeasy.it');


export function ShopPage() {

    function loadData() {
        pb.collection('products').getList<Product>()
            .then(res => {
                console.log(res.items[0].name)
            })
    }

    return (
        <>

            <BgPageTitle title="SHOP" />

            <button className="btn" onClick={loadData}>load data</button>

        </>
    )
}