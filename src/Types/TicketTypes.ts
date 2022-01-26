/**
 * Ticket Complaint Types
 */
export const OrderNotReceived = "Did Not Receive PG&E Order Confirmation Email";
export const IncorrectPgeEmailInfo = "Received PG&E Email With Incorrect Information";
export const MissingPgeEmailInfo = "PG&E Confirmation Email Missing Information";
export const BehaviorIssues = "Behavior Issues/Sales Professionalism";
export const OrderStatus = "Order Status(Internet/TV/Wireless/Security)";
export const ServicePlanInquiry = "Service Plan Inquiry (Surge Protection)";
export const IncompleteInformation = "Incomplete/Inaccurate Information";
export const CallDropped = "Call Dropped";
export const LongHoldTime = "Long Hold Time";
export const TransferredWithoutAuthorization = "Transferred to 3rd Party Without Authorization";
export const CreditCheckConcern = "Credit Check Concern";
export const Slammed = "Slammed";
export const BackgroundMusic = "Background Noise";
export const Other = "Other";

/**
 * Ticket Priority
 */
export const High = "High";
export const Medium = "Medium";
export const Low = "Low";

/**
 * Ticket Status
 */
export const Open = "Open";
export const Hold = "Hold";
export const Closed = "Closed";

/**
 * Ticket Customer Contact Method
 */
export const Email = "Email";
export const Phone = "Phone";

/**
 * Ticket Validity
 */
export const Valid = "Valid";
export const Invalid = "Invalid";

export const ticketPriority = [High, Medium, Low] as const;
export type TicketPriority = typeof ticketPriority[number];

export const ticketComplaintType = [OrderNotReceived, IncorrectPgeEmailInfo, MissingPgeEmailInfo, BehaviorIssues, OrderStatus, ServicePlanInquiry, IncompleteInformation, CallDropped, LongHoldTime, TransferredWithoutAuthorization, CreditCheckConcern, Slammed, BackgroundMusic, Other] as const;
export type TicketComplaintType = typeof ticketComplaintType[number];

export const ticketStatus = [Open, Hold, Closed] as const;
export type TicketStatus = typeof ticketStatus[number];

export const ticketContactMethod = [Email, Phone] as const;
export type TicketContactMethod = typeof ticketContactMethod[number];

export const ticketValidity = [Valid, Invalid] as const;
export type TicketValidity = typeof ticketValidity[number];
