/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface AllowanceModuleInterface extends utils.Interface {
  functions: {
    "ALLOWANCE_TRANSFER_TYPEHASH()": FunctionFragment;
    "DOMAIN_SEPARATOR_TYPEHASH()": FunctionFragment;
    "NAME()": FunctionFragment;
    "VERSION()": FunctionFragment;
    "allowances(address,address,address)": FunctionFragment;
    "delegates(address,uint48)": FunctionFragment;
    "delegatesStart(address)": FunctionFragment;
    "tokens(address,address,uint256)": FunctionFragment;
    "setAllowance(address,address,uint96,uint16,uint32)": FunctionFragment;
    "resetAllowance(address,address)": FunctionFragment;
    "deleteAllowance(address,address)": FunctionFragment;
    "executeAllowanceTransfer(address,address,address,uint96,address,uint96,address,bytes)": FunctionFragment;
    "getChainId()": FunctionFragment;
    "generateTransferHash(address,address,address,uint96,address,uint96,uint16)": FunctionFragment;
    "getTokens(address,address)": FunctionFragment;
    "getTokenAllowance(address,address,address)": FunctionFragment;
    "addDelegate(address)": FunctionFragment;
    "removeDelegate(address,bool)": FunctionFragment;
    "getDelegates(address,uint48,uint8)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "ALLOWANCE_TRANSFER_TYPEHASH"
      | "DOMAIN_SEPARATOR_TYPEHASH"
      | "NAME"
      | "VERSION"
      | "allowances"
      | "delegates"
      | "delegatesStart"
      | "tokens"
      | "setAllowance"
      | "resetAllowance"
      | "deleteAllowance"
      | "executeAllowanceTransfer"
      | "getChainId"
      | "generateTransferHash"
      | "getTokens"
      | "getTokenAllowance"
      | "addDelegate"
      | "removeDelegate"
      | "getDelegates"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "ALLOWANCE_TRANSFER_TYPEHASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DOMAIN_SEPARATOR_TYPEHASH",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "NAME", values?: undefined): string;
  encodeFunctionData(functionFragment: "VERSION", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "allowances",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "delegates",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "delegatesStart",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "tokens",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setAllowance",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "resetAllowance",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "deleteAllowance",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "executeAllowanceTransfer",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getChainId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "generateTransferHash",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokens",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenAllowance",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "addDelegate",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "removeDelegate",
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "getDelegates",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "ALLOWANCE_TRANSFER_TYPEHASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DOMAIN_SEPARATOR_TYPEHASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "NAME", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "VERSION", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "allowances", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "delegates", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "delegatesStart",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokens", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "resetAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deleteAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeAllowanceTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getChainId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "generateTransferHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getTokens", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTokenAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addDelegate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeDelegate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDelegates",
    data: BytesLike
  ): Result;

  events: {
    "AddDelegate(address,address)": EventFragment;
    "DeleteAllowance(address,address,address)": EventFragment;
    "ExecuteAllowanceTransfer(address,address,address,address,uint96,uint16)": EventFragment;
    "PayAllowanceTransfer(address,address,address,address,uint96)": EventFragment;
    "RemoveDelegate(address,address)": EventFragment;
    "ResetAllowance(address,address,address)": EventFragment;
    "SetAllowance(address,address,address,uint96,uint16)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddDelegate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DeleteAllowance"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ExecuteAllowanceTransfer"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PayAllowanceTransfer"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RemoveDelegate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ResetAllowance"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetAllowance"): EventFragment;
}

export interface AddDelegateEventObject {
  safe: string;
  delegate: string;
}
export type AddDelegateEvent = TypedEvent<
  [string, string],
  AddDelegateEventObject
>;

export type AddDelegateEventFilter = TypedEventFilter<AddDelegateEvent>;

export interface DeleteAllowanceEventObject {
  safe: string;
  delegate: string;
  token: string;
}
export type DeleteAllowanceEvent = TypedEvent<
  [string, string, string],
  DeleteAllowanceEventObject
>;

export type DeleteAllowanceEventFilter = TypedEventFilter<DeleteAllowanceEvent>;

export interface ExecuteAllowanceTransferEventObject {
  safe: string;
  delegate: string;
  token: string;
  to: string;
  value: BigNumber;
  nonce: number;
}
export type ExecuteAllowanceTransferEvent = TypedEvent<
  [string, string, string, string, BigNumber, number],
  ExecuteAllowanceTransferEventObject
>;

export type ExecuteAllowanceTransferEventFilter =
  TypedEventFilter<ExecuteAllowanceTransferEvent>;

export interface PayAllowanceTransferEventObject {
  safe: string;
  delegate: string;
  paymentToken: string;
  paymentReceiver: string;
  payment: BigNumber;
}
export type PayAllowanceTransferEvent = TypedEvent<
  [string, string, string, string, BigNumber],
  PayAllowanceTransferEventObject
>;

export type PayAllowanceTransferEventFilter =
  TypedEventFilter<PayAllowanceTransferEvent>;

export interface RemoveDelegateEventObject {
  safe: string;
  delegate: string;
}
export type RemoveDelegateEvent = TypedEvent<
  [string, string],
  RemoveDelegateEventObject
>;

export type RemoveDelegateEventFilter = TypedEventFilter<RemoveDelegateEvent>;

export interface ResetAllowanceEventObject {
  safe: string;
  delegate: string;
  token: string;
}
export type ResetAllowanceEvent = TypedEvent<
  [string, string, string],
  ResetAllowanceEventObject
>;

export type ResetAllowanceEventFilter = TypedEventFilter<ResetAllowanceEvent>;

export interface SetAllowanceEventObject {
  safe: string;
  delegate: string;
  token: string;
  allowanceAmount: BigNumber;
  resetTime: number;
}
export type SetAllowanceEvent = TypedEvent<
  [string, string, string, BigNumber, number],
  SetAllowanceEventObject
>;

export type SetAllowanceEventFilter = TypedEventFilter<SetAllowanceEvent>;

export interface AllowanceModule extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AllowanceModuleInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    ALLOWANCE_TRANSFER_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;

    DOMAIN_SEPARATOR_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;

    NAME(overrides?: CallOverrides): Promise<[string]>;

    VERSION(overrides?: CallOverrides): Promise<[string]>;

    allowances(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, number, number, number] & {
        amount: BigNumber;
        spent: BigNumber;
        resetTimeMin: number;
        lastResetMin: number;
        nonce: number;
      }
    >;

    delegates(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, number, number] & {
        delegate: string;
        prev: number;
        next: number;
      }
    >;

    delegatesStart(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[number]>;

    tokens(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    setAllowance(
      delegate: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      allowanceAmount: PromiseOrValue<BigNumberish>,
      resetTimeMin: PromiseOrValue<BigNumberish>,
      resetBaseMin: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    resetAllowance(
      delegate: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    deleteAllowance(
      delegate: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    executeAllowanceTransfer(
      safe: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      paymentToken: PromiseOrValue<string>,
      payment: PromiseOrValue<BigNumberish>,
      delegate: PromiseOrValue<string>,
      signature: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getChainId(overrides?: CallOverrides): Promise<[BigNumber]>;

    generateTransferHash(
      safe: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      paymentToken: PromiseOrValue<string>,
      payment: PromiseOrValue<BigNumberish>,
      nonce: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getTokens(
      safe: PromiseOrValue<string>,
      delegate: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    getTokenAllowance(
      safe: PromiseOrValue<string>,
      delegate: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]]>;

    addDelegate(
      delegate: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    removeDelegate(
      delegate: PromiseOrValue<string>,
      removeAllowances: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getDelegates(
      safe: PromiseOrValue<string>,
      start: PromiseOrValue<BigNumberish>,
      pageSize: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string[], number] & { results: string[]; next: number }>;
  };

  ALLOWANCE_TRANSFER_TYPEHASH(overrides?: CallOverrides): Promise<string>;

  DOMAIN_SEPARATOR_TYPEHASH(overrides?: CallOverrides): Promise<string>;

  NAME(overrides?: CallOverrides): Promise<string>;

  VERSION(overrides?: CallOverrides): Promise<string>;

  allowances(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, number, number, number] & {
      amount: BigNumber;
      spent: BigNumber;
      resetTimeMin: number;
      lastResetMin: number;
      nonce: number;
    }
  >;

  delegates(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, number, number] & { delegate: string; prev: number; next: number }
  >;

  delegatesStart(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<number>;

  tokens(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  setAllowance(
    delegate: PromiseOrValue<string>,
    token: PromiseOrValue<string>,
    allowanceAmount: PromiseOrValue<BigNumberish>,
    resetTimeMin: PromiseOrValue<BigNumberish>,
    resetBaseMin: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  resetAllowance(
    delegate: PromiseOrValue<string>,
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  deleteAllowance(
    delegate: PromiseOrValue<string>,
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  executeAllowanceTransfer(
    safe: PromiseOrValue<string>,
    token: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    paymentToken: PromiseOrValue<string>,
    payment: PromiseOrValue<BigNumberish>,
    delegate: PromiseOrValue<string>,
    signature: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getChainId(overrides?: CallOverrides): Promise<BigNumber>;

  generateTransferHash(
    safe: PromiseOrValue<string>,
    token: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    paymentToken: PromiseOrValue<string>,
    payment: PromiseOrValue<BigNumberish>,
    nonce: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getTokens(
    safe: PromiseOrValue<string>,
    delegate: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string[]>;

  getTokenAllowance(
    safe: PromiseOrValue<string>,
    delegate: PromiseOrValue<string>,
    token: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>;

  addDelegate(
    delegate: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  removeDelegate(
    delegate: PromiseOrValue<string>,
    removeAllowances: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getDelegates(
    safe: PromiseOrValue<string>,
    start: PromiseOrValue<BigNumberish>,
    pageSize: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[string[], number] & { results: string[]; next: number }>;

  callStatic: {
    ALLOWANCE_TRANSFER_TYPEHASH(overrides?: CallOverrides): Promise<string>;

    DOMAIN_SEPARATOR_TYPEHASH(overrides?: CallOverrides): Promise<string>;

    NAME(overrides?: CallOverrides): Promise<string>;

    VERSION(overrides?: CallOverrides): Promise<string>;

    allowances(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, number, number, number] & {
        amount: BigNumber;
        spent: BigNumber;
        resetTimeMin: number;
        lastResetMin: number;
        nonce: number;
      }
    >;

    delegates(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, number, number] & {
        delegate: string;
        prev: number;
        next: number;
      }
    >;

    delegatesStart(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<number>;

    tokens(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    setAllowance(
      delegate: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      allowanceAmount: PromiseOrValue<BigNumberish>,
      resetTimeMin: PromiseOrValue<BigNumberish>,
      resetBaseMin: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    resetAllowance(
      delegate: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    deleteAllowance(
      delegate: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    executeAllowanceTransfer(
      safe: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      paymentToken: PromiseOrValue<string>,
      payment: PromiseOrValue<BigNumberish>,
      delegate: PromiseOrValue<string>,
      signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    getChainId(overrides?: CallOverrides): Promise<BigNumber>;

    generateTransferHash(
      safe: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      paymentToken: PromiseOrValue<string>,
      payment: PromiseOrValue<BigNumberish>,
      nonce: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getTokens(
      safe: PromiseOrValue<string>,
      delegate: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string[]>;

    getTokenAllowance(
      safe: PromiseOrValue<string>,
      delegate: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>;

    addDelegate(
      delegate: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    removeDelegate(
      delegate: PromiseOrValue<string>,
      removeAllowances: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    getDelegates(
      safe: PromiseOrValue<string>,
      start: PromiseOrValue<BigNumberish>,
      pageSize: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string[], number] & { results: string[]; next: number }>;
  };

  filters: {
    "AddDelegate(address,address)"(
      safe?: PromiseOrValue<string> | null,
      delegate?: null
    ): AddDelegateEventFilter;
    AddDelegate(
      safe?: PromiseOrValue<string> | null,
      delegate?: null
    ): AddDelegateEventFilter;

    "DeleteAllowance(address,address,address)"(
      safe?: PromiseOrValue<string> | null,
      delegate?: null,
      token?: null
    ): DeleteAllowanceEventFilter;
    DeleteAllowance(
      safe?: PromiseOrValue<string> | null,
      delegate?: null,
      token?: null
    ): DeleteAllowanceEventFilter;

    "ExecuteAllowanceTransfer(address,address,address,address,uint96,uint16)"(
      safe?: PromiseOrValue<string> | null,
      delegate?: null,
      token?: null,
      to?: null,
      value?: null,
      nonce?: null
    ): ExecuteAllowanceTransferEventFilter;
    ExecuteAllowanceTransfer(
      safe?: PromiseOrValue<string> | null,
      delegate?: null,
      token?: null,
      to?: null,
      value?: null,
      nonce?: null
    ): ExecuteAllowanceTransferEventFilter;

    "PayAllowanceTransfer(address,address,address,address,uint96)"(
      safe?: PromiseOrValue<string> | null,
      delegate?: null,
      paymentToken?: null,
      paymentReceiver?: null,
      payment?: null
    ): PayAllowanceTransferEventFilter;
    PayAllowanceTransfer(
      safe?: PromiseOrValue<string> | null,
      delegate?: null,
      paymentToken?: null,
      paymentReceiver?: null,
      payment?: null
    ): PayAllowanceTransferEventFilter;

    "RemoveDelegate(address,address)"(
      safe?: PromiseOrValue<string> | null,
      delegate?: null
    ): RemoveDelegateEventFilter;
    RemoveDelegate(
      safe?: PromiseOrValue<string> | null,
      delegate?: null
    ): RemoveDelegateEventFilter;

    "ResetAllowance(address,address,address)"(
      safe?: PromiseOrValue<string> | null,
      delegate?: null,
      token?: null
    ): ResetAllowanceEventFilter;
    ResetAllowance(
      safe?: PromiseOrValue<string> | null,
      delegate?: null,
      token?: null
    ): ResetAllowanceEventFilter;

    "SetAllowance(address,address,address,uint96,uint16)"(
      safe?: PromiseOrValue<string> | null,
      delegate?: null,
      token?: null,
      allowanceAmount?: null,
      resetTime?: null
    ): SetAllowanceEventFilter;
    SetAllowance(
      safe?: PromiseOrValue<string> | null,
      delegate?: null,
      token?: null,
      allowanceAmount?: null,
      resetTime?: null
    ): SetAllowanceEventFilter;
  };

  estimateGas: {
    ALLOWANCE_TRANSFER_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;

    DOMAIN_SEPARATOR_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;

    NAME(overrides?: CallOverrides): Promise<BigNumber>;

    VERSION(overrides?: CallOverrides): Promise<BigNumber>;

    allowances(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    delegates(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    delegatesStart(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokens(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setAllowance(
      delegate: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      allowanceAmount: PromiseOrValue<BigNumberish>,
      resetTimeMin: PromiseOrValue<BigNumberish>,
      resetBaseMin: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    resetAllowance(
      delegate: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    deleteAllowance(
      delegate: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    executeAllowanceTransfer(
      safe: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      paymentToken: PromiseOrValue<string>,
      payment: PromiseOrValue<BigNumberish>,
      delegate: PromiseOrValue<string>,
      signature: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getChainId(overrides?: CallOverrides): Promise<BigNumber>;

    generateTransferHash(
      safe: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      paymentToken: PromiseOrValue<string>,
      payment: PromiseOrValue<BigNumberish>,
      nonce: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTokens(
      safe: PromiseOrValue<string>,
      delegate: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTokenAllowance(
      safe: PromiseOrValue<string>,
      delegate: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    addDelegate(
      delegate: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    removeDelegate(
      delegate: PromiseOrValue<string>,
      removeAllowances: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getDelegates(
      safe: PromiseOrValue<string>,
      start: PromiseOrValue<BigNumberish>,
      pageSize: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ALLOWANCE_TRANSFER_TYPEHASH(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    DOMAIN_SEPARATOR_TYPEHASH(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    NAME(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allowances(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    delegates(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    delegatesStart(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokens(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setAllowance(
      delegate: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      allowanceAmount: PromiseOrValue<BigNumberish>,
      resetTimeMin: PromiseOrValue<BigNumberish>,
      resetBaseMin: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    resetAllowance(
      delegate: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    deleteAllowance(
      delegate: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    executeAllowanceTransfer(
      safe: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      paymentToken: PromiseOrValue<string>,
      payment: PromiseOrValue<BigNumberish>,
      delegate: PromiseOrValue<string>,
      signature: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getChainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    generateTransferHash(
      safe: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      paymentToken: PromiseOrValue<string>,
      payment: PromiseOrValue<BigNumberish>,
      nonce: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTokens(
      safe: PromiseOrValue<string>,
      delegate: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTokenAllowance(
      safe: PromiseOrValue<string>,
      delegate: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addDelegate(
      delegate: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    removeDelegate(
      delegate: PromiseOrValue<string>,
      removeAllowances: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getDelegates(
      safe: PromiseOrValue<string>,
      start: PromiseOrValue<BigNumberish>,
      pageSize: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
