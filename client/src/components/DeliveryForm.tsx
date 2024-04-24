import { ChangeEvent, useEffect, useState } from "react";
import DeliveryFormData from "../models/DeliveryFormData";
import StyledForm from "../styled/StyledForm";
import { getDeliveryData } from "../services/authServices";
import { getServicePoints } from "../services/postnordServices";
import IServicePoint from "../models/IServicePoint";

interface IDeliveryFormProps {
  selectServicePoint: (servicePointId: string) => void;
}

const DeliveryForm = ({ selectServicePoint }: IDeliveryFormProps) => {
  const [formData, setFormData] = useState<DeliveryFormData>();
  const [servicePoints, setServicePoints] = useState<IServicePoint[]>();

  useEffect(() => {
    if (formData) return;

    const awaitGetDeliveryData = async () => {
      try {
        const data = await getDeliveryData();
        console.log(data);
        setFormData(data);
      } catch (error) {
        console.log(error);
      }
    };
    awaitGetDeliveryData();
  });

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (!formData) return;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return formData ? (
    <>
      <StyledForm>
        <label>
          <span>Your name:</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleFormChange}
            required
          />
        </label>
        <label>
          <span>Address line 1:</span>
          <input
            type="text"
            name="addressLine1"
            value={formData.addressLine1}
            onChange={handleFormChange}
            required
          />
        </label>
        <label>
          <span>Address line 2:</span>
          <input
            type="text"
            name="addressLine2"
            value={formData.addressLine2}
            onChange={handleFormChange}
            required
          />
        </label>
        <label>
          <span>Postal Code:</span>
          <input
            type="text"
            name="postal_code"
            value={formData.postal_code}
            onChange={handleFormChange}
            required
          />
        </label>
        <label>
          <span>City:</span>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleFormChange}
            required
          />
        </label>
        <label>
          <span>Country:</span>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleFormChange}
            required
            disabled
          />
        </label>
        <label>
          <span>Phone:</span>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleFormChange}
            required
          />
        </label>

        <button
          onClick={async (e) => {
            e.preventDefault();
            const data = await getServicePoints(formData);
            setServicePoints(
              data.servicePointInformationResponse.servicePoints
            );
          }}
        >
          Get service points
        </button>
      </StyledForm>

      {servicePoints ? (
        <>
          <h2>Select a delivery point</h2>
          <StyledForm>
            {servicePoints.map((servicePoint) => (
              <label key={servicePoint.servicePointId}>
                <input
                  type="radio"
                  name="servicePoints"
                  value={servicePoint.servicePointId}
                  onClick={(e) => {
                    selectServicePoint(e.currentTarget.value);
                  }}
                />
                {servicePoint.name}
              </label>
            ))}
          </StyledForm>
        </>
      ) : (
        "Loading service points"
      )}
    </>
  ) : (
    "Loading form"
  );
};

export default DeliveryForm;
