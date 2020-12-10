import styled from "styled-components"


const About = ()=>{
   return (
   <S.About>
        <S.Content>
            <S.Title>Официальное наименование: </S.Title>
            <span>Государственное учреждение образования "Средняя школа № 12 г.Гомеля"</span>
         </S.Content> 
         <S.Content>
            <S.Title>Тип учреждения: </S.Title>
            <span>Учреждение общего среднего образования</span>
         </S.Content>
         <S.Content>
            <S.Title>Населенный пункт: </S.Title>
            <span>Гомель</span>
         </S.Content>  <S.Content>
            <S.Title >Адрес: </S.Title>
            <span>проспект Космонавтов д. 54, г. Гомель, Республика Беларусь, 246 031 </span>
         </S.Content>
   </S.About>)
   

}
const S ={
   About: styled.div`
      border:1px solid #000;
      border-radius: 10px;
      
   `,
   Content: styled.div`
   width:100%;
   padding: 15px;
      display:flex;
         justify-content: space-between;
         flex-direction:column;
   `,
   Title: styled.span`
   font-weight: bold;

   `
}

export default About;