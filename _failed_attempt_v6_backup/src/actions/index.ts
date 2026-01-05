import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

export const server = {
    contact: defineAction({
        accept: 'form',
        input: z.object({
            name: z.string().min(2, "Name must be at least 2 characters"),
            contact: z.string().min(5, "Contact info must be at least 5 characters"),
            service: z.string().optional(),
            date: z.string().optional(),
            message: z.string().min(10, "Message must be at least 10 characters"),
        }),
        handler: async (input) => {
            console.log('--- NEW CONTACT FORM SUBMISSION ---');
            console.log('Name:', input.name);
            console.log('Contact:', input.contact);
            console.log('Service:', input.service);
            console.log('Date:', input.date);
            console.log('Message:', input.message);

            // Here you would typically send an email, save to database, or notify via n8n
            // For now, we return a success status

            return {
                success: true,
                message: "สถาปนาข้อความสำเร็จ! ข้าพเจ้าได้รับข้อมูลแล้วครับ",
            };
        },
    }),
};
