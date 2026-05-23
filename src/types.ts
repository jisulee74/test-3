export type TaskStatus = "TODO" | "IN_PROGRESS" | "DONE";

export type Campaign = {
  id: string;
  title: string;
  targetStores: string[];
};

export type Task = {
  id: string;
  campaignId: string;
  storeId: string;
  status: TaskStatus;
};
