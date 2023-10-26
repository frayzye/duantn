import { Row } from 'antd';
import styled from 'styled-components';

export const WrapperHeader = styled(Row)`
       padding: 10px 120px;
       background: -webkit-linear-gradient(#F3B850, #FF954D);
       align-items: center;
       gap: 16px;
       flex-wrap: nowrap;
       cursor: pointer;
`;

export const WrapperTextHeader = styled.span`
font-size: 18px;
color: #fff;
font-weight: bold;
text-alight: left;
`;

export const WrapperHeaderAccound = styled.div`
display: flex;
alight-items: center;
color: #fff;
`

export const WrapperTextHeaderSmall = styled.span`
font-size: 15px;
color:#fff;
white-space: nowrap;
`
export const WrapperHeaderTitle = styled.div`
cursor: pointer;
color: #fff;
`
