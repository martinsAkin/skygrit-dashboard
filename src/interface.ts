/* eslint-disable @typescript-eslint/no-explicit-any */
export interface VerifyClaimsProps{
 verifier: string;
 verifiComment?: string;
 verifiedOn: {
   dateVerified: string,
   timeVerified: string,
   dateApproved: string,
   timeApproved: string
 }
 approver: string;
}


export interface RefundRowType {
  label: string;
  type: "select" | "number";
  key: string;
}

export interface RefundData {
  policyId: number;
  routeType: string;
  cabinType: string;
  ticketClass: string;
  reason: string;
  [key: string]: string | number | null;
}

export interface RefundTableProps {
  ticketClasses: string[];
  reasons: string[];
  refundDataMap: Record<string, any>;
  refundRows: RefundRowType[];
  refundTimelineOptions: string[];
  onChange: () => void;
}

export interface RefundRowProps {
  reason: string;
  row: RefundRowType;
  idx: number;
  ticketClasses: string[];
  refundDataMap: Record<string, any>;
  refundTimelineOptions: string[];
  onChange: () => void;
}

export interface RefundCellProps {
  reason: string;
  tc: string;
  row: RefundRowType;
  refundDataMap: Record<string, any>;
  refundTimelineOptions: string[];
  onChange: () => void;
}
export interface ActionBtnProps {
  changed: boolean;
  onSave: () => void;
  onCancel: () => void;
}

export interface ModulesBtnSetProps{
 text1?: string
 text2?: string
 onCancel: () => void
}
export interface ModulesProps{
 onCancel: () => void;
}

export interface MenuUserMgtProps{
  onEdit: () =>  void
  onDeactivate: () =>  void
  onDelete: () =>  void
  onClose: () =>  void
}
