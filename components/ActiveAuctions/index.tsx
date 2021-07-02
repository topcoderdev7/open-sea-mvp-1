import Link from "next/link";
import useEnrichedAssetsData from "../../hooks/useEnrichedAssetsData";
import { NFT } from "../../types";
import Asset from "../Asset";
import AssetOnSale from "../AssetOnSale";
import styles from "./Auctions.module.scss";

const Auctions: React.FC<{
    assets: NFT[];
    link?: string;
}> = ({ assets, link }) => {
    const enrichedAssets = useEnrichedAssetsData(assets);
    return (
        <main className={styles.auctions}>
            <div className={styles.headline}>
                <div className={styles.title}>
                    <img alt="Live Auctions" src="/images/Auctions.png" />
                </div>
                <div className={styles.divider}>
                    <hr />
                </div>
            </div>
            <div className={styles.auctionsContainer}>
                {enrichedAssets.map(
                    ({
                        description,
                        imageUrl,
                        name,
                        slug,
                        reserve,
                        artist,
                        onSale,
                        file,
                        sold,
                        soldFor,
                        address,
                        tokenId,
                        salesOrder,
                        currentBid,
                        iconUrl,
                        iconURLSold
                    }) => (
                        <>
                            <AssetOnSale
                                address={address}
                                tokenId={tokenId}
                                onSale={onSale}
                                artist={artist?.name}
                                key={name}
                                sold={sold}
                                soldFor={soldFor}
                                slug={slug}
                                description={description}
                                imageUrl={imageUrl}
                                name={name}
                                reserve={reserve}
                                file={file}
                                salesOrder={salesOrder}
                                currentBid={currentBid}
                                iconUrl={iconUrl}
                                iconURLSold={iconURLSold}
                            />
                        </>
                    ),
                )}
            </div>
            <div className={styles.pageLink}>
                {link && <Link href={link}>View All Artwork</Link>}
            </div>
        </main>
    );
};

export default Auctions;
