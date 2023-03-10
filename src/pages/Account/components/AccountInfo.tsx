import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useAuth from "../../../hooks/useAuth";
import InformationBoxes from "./InformationBoxes";

type AccountInfoType = {
  className?: string;
};

export default function AccountInfo({ className }: AccountInfoType) {
  let { user } = useAuth();
  let navigate = useNavigate();

  console.log(user);

  useEffect(() => {
    if (!user.name?.length) navigate("/");
  }, [user]);

  return (
    <section id="Account Info Container" className={className}>
      <div id="Account Info Header">
        <h1 className="text-2xl font-bold">ACCOUNT INFO</h1>
        <p>
          Attention: Address changes will only apply to orders for which the
          cut-off time has not yet passed. If you are attempting to update your
          delivery address for an order that has already been confirmed, you
          must email us at "ADD EMAIL"
        </p>
      </div>
      <div className="grid grid-cols-2 pt-8">
        <div>
          <h2 className="text-xl font-bold">Personal Info</h2>
          <div className="px-2 py-6">
            <InformationBoxes
              header="First Name"
              type="text"
              id="First Name"
              name="First Name"
              placeholder="First Name"
              readOnly
              value={user.name}
            />
            <InformationBoxes
              header="Last Name"
              type="text"
              id="Last Name"
              name="Last Name"
              readOnly
              placeholder={user.name}
            />
            <InformationBoxes
              header="Email"
              type="email"
              id="Email"
              name="Email"
              readOnly
              value={user.email}
            />
            <InformationBoxes
              header="Phone Number"
              type="tel"
              id="Phone Number"
              name="Phone Number"
              readOnly
              placeholder={user.name}
            />
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold">Delivery Address</h2>
          <div className="px-2 py-6">
            <InformationBoxes
              header="Address"
              type="text"
              id="Address"
              name="Address"
              readOnly
              value={user.address?.description}
              placeholder={user.address?.description}
            />
            <InformationBoxes
              header="Address (line 2)"
              type="text"
              id="Address 2"
              readOnly
              name="Address 2"
              placeholder={user.name}
            />
            <InformationBoxes
              header="City"
              type="text"
              id="City"
              readOnly
              name="City"
              placeholder={user.name}
            />
            <div className="flex gap-x-4">
              <InformationBoxes
                header="State"
                type="text"
                id="State"
                readOnly
                name="State"
                placeholder={user.name}
              />
              <InformationBoxes
                header="Zip/Post Code"
                type="text"
                readOnly
                id="Zip/Post Code"
                name="Zip/Post Code"
                placeholder={user.name}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
