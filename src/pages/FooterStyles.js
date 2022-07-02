import styles from 'styled-components';
   
export const BoxFooter = styles.div`
  padding: 30px 0px 0px 0px;
  background: #EC6C09;
  bottom: 0;
  width: 100%;
  
  @media (max-width: 794px) {
    padding: 70px 30px;
  }
`;
   
export const ContainerFooter = styles.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
`
   
export const ColumnFooter = styles.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  
`;
   
export const RowFooter = styles.div`
  display: grid;
  margin-left: 15%;
  margin-right: 15%;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 50px;
   
  @media (max-width: 794px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
export const FooterLink = styles.a`
  color: #fff;
  
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
      color: black;
      transition: 200ms ease-in;
  }
`;
   
export const HeadingFooter = styles.p`
  font-size: 24px;
  color: #fff;
  
  font-weight: bold;
`;

export const ParagraphFooter = styles.p`
  font-size: 20px;
  color: #fff;
  
`;

export const HeadingFooterSocial = styles.p`
  font-size: 24px;
  color: #fff;
  
  font-weight: bold;
`;