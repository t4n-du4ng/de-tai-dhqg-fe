import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'

import CHeader from 'common/components/CHeader'
import { SUBJECT } from 'common/contanst'
import { MForm } from 'modules/subject-registration/components'
import { Container } from 'react-bootstrap'

export default function SubjectRegistrationPage() {
	//#region Data
	const router = useRouter()
	const [currentStep, setCurrentStep] = useState(0)

	//#endregion

	//#region Event

	const handleStepChange = (step) => () => {
		setCurrentStep(step)
	}
	const previousStep = () => {
		setCurrentStep((cur) => cur - 1)
	}
	const nextStep = () => {
		setCurrentStep((cur) => cur + 1)
	}
	//#endregion
	return (
		<div>
			<Head>
				<title>Quản lí đề tài</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<>
				<CHeader />
				<Container fluid='lg' className='py-5'>
					<nav
						style={{
							'--bs-breadcrumb-divider': '">"',
						}}
						aria-label='breadcrumb'
					>
						<ol className='breadcrumb'>
							{SUBJECT.map((tab) => (
								<li
									key={tab.index}
									className={`breadcrumb-item ${currentStep === tab.index ? 'text-primary' : ''}`}
									type='button'
									onClick={handleStepChange(tab.index)}
								>
									{tab.index + 1}. {tab.label}
								</li>
							))}
						</ol>
					</nav>
					<MForm step={currentStep} previousStep={previousStep} nextStep={nextStep} />
				</Container>
			</>
		</div>
	)
}
