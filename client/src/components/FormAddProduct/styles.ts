import styled from "styled-components";
import { Button } from "../Button";

import { Input } from "../Input";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #fdfdfd;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalHeader = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-between;
`;

export const ModalTitle = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
`;

export const ModalCloseButton = styled.button`
  display: flex;
  height: 17px;
  align-items: flex-start;
  justify-content: center;
  border: none;
  background: transparent;
`;

export const ModalAddTypeTitle = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 24px;
`;

export const ModalAddType = styled.div`
  display: flex;
  margin-bottom: 24px;
  justify-content: space-between;
  width: 100%;
`;

export const AddTypeButton = styled(Button)`
  width: 228px;
`;

export const ModalVehicleInfos = styled.section`
  width: 100%;
`;

export const SectionTitle = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  padding-bottom: 24px;
`;

export const VehicleTitle = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
`;

export const VehicleDetailsSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const TitleInput = styled(Input)`
  width: 100%;
`;

export const Details = styled.div`
  margin-top: 24px;
  width: 30%;
`;

export const VehicleDetail = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
`;

export const VehicleDescriptionSection = styled.div`
  width: 100%;
  margin-bottom: 24px;
`;

export const DescriptionTitle = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 24px;
`;

export const TextAreaSection = styled.div`
  width: 100%;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 90px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  padding-left: 10px;
  padding-top: 10px;
`;

export const VehicleImageSection = styled.div`
  width: 100%;
`;

export const CapeImageTitle = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 24px;
`;

export const InputImageFileCape = styled.input`
    
`
