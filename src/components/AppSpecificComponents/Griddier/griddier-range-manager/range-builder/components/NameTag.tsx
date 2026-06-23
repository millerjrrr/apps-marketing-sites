import React from "react";
import { useDispatch, useSelector } from "react-redux";
import colors from "../utils/colors";
import { setName } from "../store/rangeSlice";
import type { RootState } from "../store";

const NameTag = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((state: RootState) => state.range);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(e.target.value));
  };

  return (
    <input
      type="text"
      value={name}
      onChange={handleChange}
      placeholder="Enter range name..."
      style={{
        marginTop: 10,
        marginBottom: 10,
        padding: "8px 12px",
        borderRadius: 8,
        border: `2px solid ${colors.TERTIARY}`,
        backgroundColor: colors.SECONDARY,
        color: colors.CONTRAST,
        fontSize: 16,
        width: 300,
        textAlign: "center",
      }}
    />
  );
};

export default NameTag;
