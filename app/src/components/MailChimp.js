
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newsletter";


export const MailchimpForm = () => {
    const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}?id=${process.env.REACT_APP_MAILCHIM_ID}`;

    return (
        <>
            <MailchimpSubscribe url={postUrl} render={({ MailchimSubscribe, status, message }) => (
                <Newsletter status={status} message={message} onValidated={formData => MailchimSubscribe(FormData)} />
            )}
            />
        </>
    )
}