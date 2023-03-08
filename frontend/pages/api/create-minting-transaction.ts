import type { NextApiRequest, NextApiResponse } from "next";
import {
    KoiosProvider,
    AppWallet,
    ForgeScript,
    AssetMetadata,
    Mint,
    largestFirst,
    Transaction,
    UTxO,
} from "@meshsdk/core";
import { features } from "process";

type Data = {
    recipientAddress: string;
    utxos: UTxO[];
    mnemonic: string[];
};

const handler = async function (
    request: NextApiRequest,
    response: NextApiResponse,
) {
    try {
        const { recipientAddress, utxos, mnemonic, ballotName } =
            request.body;
        const koiosProvider = new KoiosProvider("preprod");

        const appWallet = new AppWallet({
            networkId: 0,
            fetcher: koiosProvider,
            submitter: koiosProvider,
            key: {
                type: "mnemonic",
                words: mnemonic,
            },
        });

        const appWalletAddress = appWallet.getPaymentAddress();
        const forgingScript =
            ForgeScript.withOneSignature(appWalletAddress);

        const assetName = ballotName;

        const assetMetadata: AssetMetadata = {
            name: "Nguyễn Khánh",
            image: "https://yt3.ggpht.com/ONEZ74QDZHAgAFAqVQmBxc1pJM7CslFI1djWQzXeFjVJJXeSyVaicAMuYCMkF1h8ZDlNtc6-=s88-c-k-c0x00ffffff-no-rj-mo",
            mediaType: "image/png",
            description: "Nguyễn Duy Khánh",
            position: "Tech leader",
        };

        const asset: Mint = {
            assetName: assetName,
            assetQuantity: "1",
            metadata: assetMetadata,
            label: "721",
            recipient: recipientAddress,
        };

        const costLoveLace = "10000000";
        const selectedUtxos = largestFirst(costLoveLace, utxos, true);
        const bankWalletAddress =
            "addr_test1qrpvgytw7tejqfp82jpppztaq4zpc3qh0w75yyjxhm69x03nv2xkhsrfk0k3xe7gy3g06jcknw4ddvtvez3t5uhueuuqmxvzfj";
        const tx = new Transaction({ initiator: appWallet });
        tx.setTxInputs(selectedUtxos);
        tx.mintAsset(forgingScript, asset);
        tx.sendLovelace(bankWalletAddress, costLoveLace),
            tx.setChangeAddress(recipientAddress);
        const _unsignedTx = await tx.build();
        const unsignedTx = await appWallet.signTx(_unsignedTx, true);

        response.status(200).json({
            unsignedTx: unsignedTx,
        });
    } catch (error) {
        response.status(404).json({
            message: error,
        });
    }
};
