export interface StoreRecord {
  id?: number;
  productID: number;
  userID?: number;
  instructions: string;
  instructionsText?: string;
  quantity: number;
  price: number;
  remark: string;
  updateDate?: string;
  productName?: string;
  productSpec?: string;
}
