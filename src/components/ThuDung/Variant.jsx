import "./style.scss";
import React, { useState } from "react";
import { Select } from "antd";
import { RE_ONLY_NUMBER, GIO_RENDER } from "@utils/constants";
import { Input } from "antd";

export default function Variant({ variant, cb_delTable, cb_setTable }) {
  const [options, setoptions] = useState(
    Object.keys(GIO_RENDER).map((key) => {
      return {
        label: (
          <div className="opt-lbl">
            <span>{GIO_RENDER[key]}</span>
          </div>
        ),
        value: key,
      };
    })
  );
  //   const [label, setLabel] = useState("BAP_CUON");

  return (
    <div className="w300px Variant__comp">
      <Select
        style={{ width: 94 }}
        className="country__select mr2px w200px"
        options={options}
        value={variant?.label}
        onChange={(val) => {
          cb_setTable(variant?.id, "label", val);

          //   Object.keys(GIO).map((key) => {
          //     if (val === key) {
          //       setPrice(GIO[key]);
          //     }
          //   });

          //   setLabel(val);
        }}
      />

      <div className="mb-4">
        <label htmlFor="product_price" className="form-label">
          Price
        </label>
        <Input
          className="form-control rounded search !h-[44px] w-full"
          type="number"
          placeholder="Price"
          readOnly
          value={variant?.price}
          onChange={(e) => {
            const numInput = e.target.value;
            if (!numInput || numInput.match(RE_ONLY_NUMBER)) {
              //   setPrice(numInput);
              //   cb_setTable(variant?.id, "price", numInput);
            }
          }}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="product_price" className="form-label">
          SỐ LƯỢNG
        </label>
        <Input
          className="form-control rounded search !h-[44px] w-full"
          type="number"
          placeholder="so luong"
          required
          allowClear
          value={variant?.quantity}
          onChange={(e) => {
            const numInput = e.target.value;
            if (numInput.length < 7)
              if (!numInput || numInput.match(RE_ONLY_NUMBER)) {
                cb_setTable(variant?.id, "quantity", numInput);
              }
          }}
        />
      </div>
      <button
        type="submit"
        className="btn btn--outline red"
        onClick={() => {
          cb_delTable(variant?.id);
        }}
      >
        Xóa
      </button>
    </div>
  );
}
