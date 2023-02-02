import { useFieldArray } from 'react-hook-form'

import { CDatePicker, CSelect, CTextInput } from 'common/components/form'

import { Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'

export default function NationalConferencePaperFields({ control, errors }) {
	//#region Data
	const { fields, append, remove } = useFieldArray({
		control,
		name: 'scientific_work.national_conference_papers',
	})
	//#endregion Data

	return (
		<>
			<label className='fw-semibold form-label'>2.4. Đăng trên kỷ yếu Hội nghị trong nước</label>

			{fields?.map((item, index) => (
				<div key={item.id} className='position-relative'>
					<hr className='border border-1 border-primary my-1' />
					<span className='fw-semibold'>TT: {index + 1}</span>
					<Row>
						<Col md={4}>
							<CTextInput
								label='Tên tác giả'
								name={`scientific_work.national_conference_papers.${index}.author`}
								control={control}
								errors={errors}
							/>
						</Col>
						<Col md={4}>
							<CTextInput
								label='Tên bài viết'
								name={`scientific_work.national_conference_papers.${index}.name`}
								control={control}
								errors={errors}
							/>
						</Col>
					</Row>
					<Row>
						<Col md={4}>
							<CTextInput
								label='Tên Hội nghị'
								name={`scientific_work.national_conference_papers.${index}.conference_name`}
								control={control}
								errors={errors}
							/>
						</Col>
						<Col md={4}>
							<CTextInput
								label='Nơi tổ chức'
								name={`scientific_work.national_conference_papers.${index}.hold_address`}
								control={control}
								errors={errors}
							/>
						</Col>
						<Col md={4}>
							<CDatePicker
								label='Thời gian tổ chức'
								name={`scientific_work.national_conference_papers.${index}.hold_time`}
								control={control}
								errors={errors}
							/>
						</Col>
					</Row>
					<Row>
						<Col md={4}>
							<CTextInput
								label='Sản phẩm của đề tài/dự án (chỉ ghi mã số)'
								name={`scientific_work.national_conference_papers.${index}.subject_code`}
								control={control}
								errors={errors}
							/>
						</Col>
						<Col md={4}>
							<CTextInput
								label='Số hiệu ISBN (ghi rõ thuộc ISI hay không)'
								name={`scientific_work.national_conference_papers.${index}.ISBN`}
								control={control}
								errors={errors}
							/>
						</Col>
						<Col md={4}>
							<CTextInput
								label='Ghi chú'
								name={`scientific_work.national_conference_papers.${index}.note`}
								control={control}
								errors={errors}
							/>
						</Col>
					</Row>
					<OverlayTrigger key='top' placement='top' overlay={<Tooltip id='tooltip-top'>Xóa bài báo</Tooltip>}>
						<i
							type='button'
							onClick={() => remove(index)}
							className='bi bi-x-circle fs-4 text-danger position-absolute top-0 end-0'
						></i>
					</OverlayTrigger>
				</div>
			))}
			<hr className='border border-1 border-primary mt-1 mb-1' />
			<div className='d-flex justify-content-center'>
				<OverlayTrigger
					key='top'
					placement='top'
					overlay={<Tooltip id='tooltip-top'>Thêm bài báo đăng trên kỷ yếu Hội nghị trong nước</Tooltip>}
				>
					<i
						type='button'
						onClick={() => {
							append()
						}}
						className='bi bi-plus-circle text-primary fs-4'
					></i>
				</OverlayTrigger>
			</div>
		</>
	)
}
