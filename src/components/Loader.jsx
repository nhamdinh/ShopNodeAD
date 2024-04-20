import {ReactComponent as Ring} from '@assets/oval.svg';

const Loader = ({radius}) => {
    const radiusLoader = radius ?? 150
    return (
        <div className="flex flex-1 justify-center items-center">
            <div className={`w-[${radiusLoader}px] h-[${radiusLoader}px] text-accent`}>
                <Ring/>
            </div>
        </div>
    )
}

export default Loader