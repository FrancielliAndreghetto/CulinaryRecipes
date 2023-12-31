import Image from "next/image";
import login from "@assets/logar.png";
import logo from "@assets/icon.png";
import InputGroup from "@components/inputs/InputGroup";
import Input from "@components/inputs/Input";
import Label from "@components/labels/Label";
import Button from "@components/button/Button"

export default function Login() {
	return (
		<section className="h-screen">
			<div className="flex h-full flex-end items-center gap-24 px-32 py-16 bg-gradient-to-r from-[#FEDCC5] to-[#FEDDC6] max-lg: justify-center">
				<div className="w-[500px] h-[600px] shadow-sm drop-shadow-[0_4px_70xpx_rgba(0,0,0,0.10)] bg-[rgba(255,255,255,0.30)] backdrop-blur-3xl rounded-3xl">
					<div className="p-24 flex flex-col gap-6">
						<Image src={logo} alt="logo" className="m-auto" />
						<h1 className="text-gray-950 text-3xl font-semibold">Login</h1>
						<form className="flex flex-col gap-5">
							<InputGroup>
								<Label htmfor="email">E-mail</Label>
								<Input id="email" type="email" placeholder="Seu Email"></Input>
							</InputGroup>
							<InputGroup>
								<Label htmfor="password">Senha</Label>
								<Input id="password" type="password" placeholder="Sua senha"></Input>
								<a href="forgot-password" className="hover:underline text-xs font-normal mt-1 w-fit">Esqueceu a senha?</a>
							</InputGroup>
							<Button type="submit">Logar-se</Button>
							<h2 className="text-xs font-normal">Você não tem uma conta? <a href="register" className="text-xs font-semibold hover:underline">Registre-se aqui</a> </h2>
						</form>
					</div>
				</div>
				<div className="w-2/4 max-lg:hidden">
					<Image src={login} alt="login" />
				</div>
			</div>
		</section>
	)
}