import "./style.scss";
import React, { useState } from "react";
import { DatePicker, Spin, Checkbox } from "antd";
import moment from "moment";
import {
  DATE_FORMAT,
  RE_ONLY_NUMBER,
  GIO,
  GIO_BUY,
  GIO_RENDER,
} from "@utils/constants";
import Variant from "./Variant";
import { useCreateThudungGioMutation } from "@store/components/thudungGios/thudungGiosApi";
import { openToast } from "@store/components/customDialog/toastSlice";
import { useDispatch } from "react-redux";
import { Radio } from "antd";
import PageHeader from "@layout/PageHeader";
import { Input } from "antd";

export default function ExportGio({ isBan }) {
  const dispatch = useDispatch();
  const [value, setValue] = useState(2);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const [sellDate, setSellDate] = useState(
    moment(new Date()).format(DATE_FORMAT)
  );
  const [buyName, setBuyName] = useState("");
  const [isGif, setisGif] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [address, setaddress] = useState("");
  const [phone, setphone] = useState("");
  const [metadata, setmetadata] = useState("");

  const [dataTable, setDataTable] = useState([]);
  //   console.log(dataTable);
  const [displayFrom, setDisplayFrom] = useState(
    moment(new Date(Date.now()), DATE_FORMAT)
  );
  const onChangeDateStart = (date, dateString) => {
    // setStartTime(new Date(dateString).toJSON());
    setSellDate(dateString);
  };
  const isValid = () => {
    if (isBan) return 1 && buyName && dataTable.length > 0;
    if (!isBan) return 1 && dataTable.length > 0;
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (isValid())
      onCreateThudungGio({
        newModel: {
          isBan,
          isGif,
          discount,
          buyName: buyName ? buyName : "DUNG",
          sellDate,
          metadata,
          address,
          phone,
          isPaid: value === 1 ? true : false,
          isDelivered: true,
          orderItems: [...dataTable],
        },
      });
  };
  const onChange1 = (e) => {
    setisGif(e.target.checked);
  };
  const [createThudungGio, { isLoading: aa, error: bb }] =
    useCreateThudungGioMutation();

  const reset = () => {
    setDataTable([]);
    setBuyName("");
    setSellDate(moment(new Date()).format(DATE_FORMAT));
    setDisplayFrom(moment(new Date(Date.now()), DATE_FORMAT));
    setisGif(false);
    setValue(2);
    setaddress("");
    setphone("");
    setmetadata("");
  };

  const onCreateThudungGio = async (values) => {
    const res = await createThudungGio(values);
    //@ts-ignore
    const data = res?.data;

    if (data) {
      reset();

      dispatch(
        openToast({
          isOpen: Date.now(),
          content: "Added ĐƠN Success",
          step: 1,
        })
      );
    } else {
      dispatch(
        openToast({
          isOpen: Date.now(),
          content: "Add ĐƠN Failed",
          step: 2,
        })
      );
    }
  };

  return (
    <section className="content-main">
      <PageHeader
        isFetching={false}
        // cb_refetch={useGetThudungGiosQuery}
        title={isBan ? "Xuất Đơn" : "Nhập Hàng"}
      />
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <button
            type="submit"
            className={`btn btn--primary ${isValid() ? "" : "cursor__not"}`}
            onClick={submitHandler}
            disabled={!isValid()}
          >
            {aa && <Spin size="large"></Spin>}
            Publish now
          </button>
          <div className="mb-4 mt20px">
            <label htmlFor="product_title" className="form-label">
              {/* Product title */}
            </label>
            <DatePicker
              allowClear={false}
              defaultValue={displayFrom}
              onChange={onChangeDateStart}
            />
          </div>
          <div className="mb-4">
            <h6 className="form-label">TÊN</h6>
            <Input
              className="form-control rounded search !h-[44px] w300px mt-2"
              placeholder="TÊN"
              required
              allowClear
              value={buyName}
              onChange={(e) => setBuyName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <h5 className="form-label">BIẾU</h5>
            <div>
              <Checkbox checked={isGif} onChange={onChange1}>
                <h6 >BIẾU</h6>
              </Checkbox>
            </div>
          </div>

          <div className="mb-4">
            <h6 className="form-label">THANH TOÁN</h6>
            <div>
              <Radio.Group onChange={onChange} value={value}>
                <Radio value={1}><h6 >RỒI</h6></Radio>
                <Radio value={2}><h6 >CHƯA</h6></Radio>
              </Radio.Group>
            </div>
          </div>

          <div className="mb-4">
            <h6 className="form-label">ĐỊA CHỈ</h6>
            <Input
              className="form-control rounded search !h-[44px] w300px mt-2"
              allowClear
              type="text"
              placeholder="ĐỊA CHỈ"
              value={address}
              onChange={(e) => setaddress(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <h6 className="form-label">SĐT</h6>
            <Input
              className="form-control rounded search !h-[44px] w300px mt-2"
              allowClear
              type="text"
              placeholder="SĐT"
              value={phone}
              onChange={(e) => {
                let numInput = e.target.value;
                if (numInput.length < 13)
                  if (!numInput || numInput.match(RE_ONLY_NUMBER)) {
                    setphone(e.target.value);
                  }
              }}
            />
          </div>

          <div className="mb-4">
            <h6 className="form-label">GIẢM GIÁ</h6>
            <Input
              className="form-control rounded search !h-[44px] w300px mt-2"
              allowClear
              type="number"
              placeholder="GIẢM GIÁ"
              value={discount}
              onChange={(e) => {
                const numInput = e.target.value;
                if (numInput.length < 7)
                  if (!numInput || numInput.match(RE_ONLY_NUMBER)) {
                    setDiscount(e.target.value);
                  }
              }}
            />
          </div>

          <div className="mb-4">
            <h6 className="form-label">NOTE</h6>
             <Input
              className="form-control rounded search !h-[44px] w300px mt-2"
              allowClear
              type="text"
              placeholder="NOTE"
              value={metadata}
              onChange={(e) => {
                setmetadata(e.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            className="btn btn--social"
            onClick={() => {
              setDataTable([
                {
                  id: Date.now(),
                  label: "BAP_CUON",
                  price: isBan ? GIO["BAP_CUON"] : GIO_BUY["BAP_CUON"],
                  quantity: 1,
                },
                ...dataTable,
              ]);
            }}
          >
            THÊM
          </button>
          <div className="mt20px dataTable">
            {dataTable.map((variant) => {
              return (
                <Variant
                  key={variant?.id}
                  variant={variant}
                  cb_delTable={(id) => {
                    setDataTable(dataTable.filter((row) => row?.id !== id));
                  }}
                  cb_setTable={(id, key, val) => {
                    setDataTable(
                      dataTable.map((row) => {
                        const final = { ...row };
                        if (row.id === id) {
                          final[key] = val;
                          Object.keys(GIO_RENDER).map((key) => {
                            if (val === key) {
                              final["price"] = isBan ? GIO[key] : GIO_BUY[key];
                            }
                          });
                        }
                        return final;
                      })
                    );
                  }}
                ></Variant>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
