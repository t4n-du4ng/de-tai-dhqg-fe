import CHeader from 'common/components/CHeader'
import Head from 'next/head'
import { useRouter } from 'next/router'
// const exam = { type: 'Exam', createBy: 1 }

export default function Home() {
	// const [user, setUser] = useState()
	// const ability = useContext(AbilityContext)
	// const handleChangeUser = (user) => () => {
	// 	ability.update(defineRulesFor(user))
	// 	setUser(user)
	// }
	// const test = ability.can('create', exam)
	const router = useRouter()
	return (
		<div>
			<Head>
				<title>Quản lí đề tài</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<>
				<CHeader />
				<h1>Trang chủ</h1>
			</>
		</div>
	)
}
