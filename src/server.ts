import type { Campaign, Task } from "./types.js";

const campaigns: Campaign[] = [];
const tasks: Task[] = [];

export function createCampaign(title: string, targetStores: string[]) {
  const campaign = { id: `campaign_${campaigns.length + 1}`, title, targetStores };
  campaigns.push(campaign);
  for (const storeId of targetStores) {
    tasks.push({ id: `task_${tasks.length + 1}`, campaignId: campaign.id, storeId, status: "TODO" });
  }
  return campaign;
}

export function listTasks(storeId?: string) {
  return storeId ? tasks.filter((task) => task.storeId === storeId) : tasks;
}

export function transitionTask(taskId: string, status: Task["status"]) {
  const task = tasks.find((item) => item.id === taskId);
  if (!task) throw new Error("Task not found");
  task.status = status;
  return task;
}
