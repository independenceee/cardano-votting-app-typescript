import { useRouter } from "next/router";

const handleChangeRouter = function ({ path }: { path: string }) {
    const router = useRouter();
    router.push(path);
};

export { handleChangeRouter };
