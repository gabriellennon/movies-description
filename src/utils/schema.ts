import { z } from "zod"

export const searchMovieSchema = z.object({
    searchTerm: z.string().min(2),
})