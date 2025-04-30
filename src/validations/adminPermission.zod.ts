import { z } from "zod";
import { AdminUserRoleSchema } from "./user.zod";

export const AdminPermissionSchema = z.object({
    role: AdminUserRoleSchema,
    resource: z.string(),
    actions: z.array(z.enum(["read", "write", "delete"]))
  });
  