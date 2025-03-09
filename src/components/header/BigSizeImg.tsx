import BigImg from '../../assets/bigSize.jpg';

// interface BigsizeImgProps {
//     onLoad?:()=>void;
// }

//export default function BigSizeImg ({onLoad}:BigsizeImgProps){
export default function BigSizeImg (){
    return (
        <img 
            alt="큰 용량 이미지"
            src={BigImg} 
            //onLoad={onLoad} // header.tsx에 있는 handleImgLoad 함수로 로딩 상태 콜백 전달 이벤트를 통해 이미지 로딩이 완료되면 상위 컴포넌트로 알립니다.
        />
    )
}