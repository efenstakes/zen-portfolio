import { Company } from '../../models/company'
import VSpacerComponent from '../v_spacer/v_spacer.component'


import './company_card.component.scss'


type ComponentProps = {
    company?: Company
    onClick: ()=> void
}
const CompanyCardComponent = ({ company, onClick }: ComponentProps) => {
  return (
    <div className='clickable column ca_center company_card' onClick={onClick}>
        

        <div className="company_card__image_container">
            <img 
                src={company?.image} 
                alt="company" 
                className="company_card__image_container__image" 
            />
        </div>
        <VSpacerComponent space={.5} />

        <p className="text_6 semi_bold">
            { company?.name }
        </p>

    </div>
  )
}

export default CompanyCardComponent