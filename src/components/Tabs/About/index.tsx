import { motion } from 'framer-motion'
import './style.css'

export const About = () => {
	return (
		<motion.div
			initial={{ opacity: 0, x: -15 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.4 }}
		>
			<div className='flex flex-col justify-between gap-20 p-2 text-base md:text-lg bg-[url("/assets/circlesBG.png")] bg-center bg-cover bg-no-repeat'>
				<div className='flex flex-col gap-4'>
					<h1 className='text-2xl font-bold flex gap-2'>
						<span className='waving'>👋</span>
						Olá, meu nome é João Pedro!
					</h1>

					<p>
						Sou <strong>Bacharel em Sistemas de informação</strong>, um desenvolvedor extremamente dedicado e esforçado, determinado em entregar excelência e cumprir os objetivos, flexível e <strong>pronto para qualquer desafio</strong>. Sem medo da novidade e de mudanças, sempre correndo em busca de evolução profissional e pessoal!
					</p>
				</div>

				<div className='flex flex-col gap-6'>
					<h2 className='text-2xl font-bold'>Sobre mim</h2>
					<p>
						Sou Possuo experiência profissional com <strong>Java</strong> & <strong>Selenium</strong>, porém sempre mantive ativo nos estudos realizando projetos pessoais com outras ferramentas e linguagens.
					</p>

					<p>
						Desde 15 anos demonstro grande interesse pela área da tecnologia, durante o ano de <strong>2018 até 2020</strong> realizei o curso de técnico em <strong>Redes de computadores</strong> onde pude aprender sobre muitas coisas com ênfase em servidores, segurança de redes
						e segurança da informação. Mas foi conversando com os professores do curso que descobri minha verdadeira paixão: o <strong>desenvolvimento de software</strong>.
					</p>

					<p>
						Em <strong>2019</strong> foi quando consegui minha vaga na faculdade onde iniciei meu curso de <strong>Sistemas de informação</strong> onde pude aprender muito
						e estudar diversas ferramentas e linguagens que utilizo até hoje.
					</p>

					<p>
						Sou mente aberta quanto ao aprendizado, busco manter a consistência aprendendo um
						pouco mais a cada dia.
					</p>

				</div>
			</div>
		</motion.div>
	)
}
