
import { Icons } from "../../components/ui/icons";
import { SiginForm } from "../../components/form/auth";

export function Auth() {
    return (
        <section className="bg-black flex h-screen items-center justify-center sm:bg-gray-100">
            <div className="bg-white m-auto w-full max-w-[420px] rounded-lg p-5 sm:p-8 sm:shadow">
                <div className="mb-2 flex justify-center">
                    <Icons.Avatar />
                </div>
                <SiginForm />

            </div>
        </section>
    )
}