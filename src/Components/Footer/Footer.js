import React from 'react'
import "./Footer.css"

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__links">
                <ul className="footer__links__wrapper">
                    <li className="footer__links__wrapper__link">
                        <a href="https://twitter.com/" rel="noreferrer" target="_blank" className="footer__links__wrapper__link_a">
                            <svg width="50" height="39" viewBox="0 0 50 39" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M50 4.74904C48.1277 5.54149 46.1417 6.06166 44.1082 6.29224C46.2264 5.07932 47.8527 3.15862 48.6186 0.870123C46.605 2.01173 44.402 2.81607 42.1047 3.24838C40.2334 1.34372 37.5676 0.153381 34.617 0.153381C28.9518 0.153381 24.3586 4.54153 24.3586 9.95376C24.3586 10.722 24.4494 11.4699 24.6242 12.1874C16.0988 11.7786 8.54023 7.87687 3.48066 1.94738C2.59785 3.39486 2.09199 5.07858 2.09199 6.87444C2.09199 10.2747 3.90313 13.2744 6.65547 15.032C5.02646 14.9832 3.4333 14.5629 2.00898 13.806C2.0084 13.847 2.0084 13.8881 2.0084 13.9293C2.0084 18.6778 5.54434 22.639 10.2369 23.5394C8.72634 23.9319 7.14185 23.9893 5.60449 23.7073C6.90977 27.601 10.6982 30.4344 15.1869 30.5137C11.6762 33.1422 7.25293 34.7091 2.44707 34.7091C1.61895 34.7091 0.802539 34.6626 0 34.5721C4.53965 37.3528 9.93164 38.9754 15.7246 38.9754C34.5932 38.9754 44.9109 24.0413 44.9109 11.0904C44.9109 10.6653 44.9012 10.2426 44.8813 9.8224C46.8895 8.43535 48.6229 6.71735 50 4.74904Z"
                                    fill="#E571F6"/>
                            </svg>
                        </a>
                    </li>
                    <li className="footer__links__wrapper__link">
                        <a href="https://discord.com/" rel="noreferrer" target="_blank" className="footer__links__wrapper__link_a">
                            <svg width="51" height="37" viewBox="0 0 51 37" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M33.4691 16.966C31.0836 16.966 29.1636 19.09 29.1636 21.745C29.1636 24.341 31.0836 26.465 33.4691 26.465C35.9127 26.465 37.8327 24.341 37.8327 21.745C37.8327 19.09 35.9127 16.966 33.4691 16.966ZM18.0509 16.966C15.6654 16.966 13.6873 19.09 13.6873 21.745C13.6873 24.341 15.6654 26.465 18.0509 26.465C20.4364 26.465 22.3564 24.341 22.3564 21.745C22.3564 19.09 20.4364 16.966 18.0509 16.966ZM37.5418 36.554C37.5418 36.554 36.0291 34.666 34.7491 33.073C40.3345 31.48 42.4291 27.94 42.4291 27.94C40.6836 29.12 38.9964 29.946 37.5418 30.477C35.3891 31.362 33.3527 32.011 31.3745 32.365C27.3018 33.132 23.5782 32.955 20.3782 32.365C17.9345 31.893 15.84 31.185 14.1527 30.477C13.1636 30.123 12.1164 29.651 11.0109 29.002C10.8945 28.943 10.7782 28.884 10.6618 28.766C10.5454 28.766 10.4873 28.707 10.4291 28.707C9.67272 28.235 9.26545 27.94 9.26545 27.94C9.26545 27.94 11.3018 31.362 16.7127 33.014C15.4327 34.666 13.8618 36.554 13.8618 36.554C4.49454 36.259 0.94545 30.005 0.94545 30.005C0.94545 16.14 7.05454 4.92998 7.05454 4.92998C13.1636 0.268981 18.9236 0.445981 18.9236 0.445981L19.3891 0.917981C11.7091 3.15998 8.21818 6.58198 8.21818 6.58198C8.21818 6.58198 9.14909 6.05098 10.7782 5.34298C15.3164 3.33698 18.8654 2.80598 20.3782 2.62898C20.6109 2.62898 20.8436 2.56998 21.0764 2.51098C23.6945 2.21598 26.6036 2.09798 29.6873 2.45198C33.7018 2.92398 38.0073 4.16298 42.4291 6.58198C42.4291 6.58198 39.1127 3.33698 31.8982 1.09498L32.48 0.445981C32.48 0.445981 38.24 0.268981 44.3491 4.92998C44.3491 4.92998 50.4582 16.14 50.4582 30.005C50.4582 30.005 46.9091 36.259 37.5418 36.554Z"
                                    fill="#E571F6"/>
                            </svg>
                        </a>
                    </li>
                    <li className="footer__links__wrapper__link">
                        <a href="https://telegram.org/" rel="noreferrer" target="_blank" className="footer__links__wrapper__link_a">
                            <svg width="48" height="50" viewBox="0 0 48 50" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M24 0.78125C10.7419 0.78125 0 11.6211 0 25C0 38.3789 10.7419 49.2188 24 49.2188C37.2581 49.2188 48 38.3789 48 25C48 11.6211 37.2581 0.78125 24 0.78125ZM35.7871 17.373L31.8484 36.1035C31.5581 37.4316 30.7742 37.7539 29.6806 37.1289L23.6806 32.666L20.7871 35.4785C20.4677 35.8008 20.1968 36.0742 19.5774 36.0742L20.0032 29.9121L31.1226 19.7754C31.6065 19.3457 31.0161 19.1016 30.3774 19.5312L16.6355 28.2617L10.7129 26.3965C9.42581 25.9863 9.39677 25.0977 10.9839 24.4727L34.1226 15.4687C35.1968 15.0781 36.1355 15.7324 35.7871 17.373Z"
                                    fill="#E571F6"/>
                            </svg>
                        </a>
                    </li>
                    <li className="footer__links__wrapper__link">
                        <a href="https://instagram.com/" rel="noreferrer" target="_blank" className="footer__links__wrapper__link_a">
                            <svg width="49" height="50" viewBox="0 0 49 50" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M24.5109 12.4218C17.5547 12.4218 11.9438 18.0328 11.9438 24.989C11.9438 31.9453 17.5547 37.5562 24.5109 37.5562C31.4672 37.5562 37.0781 31.9453 37.0781 24.989C37.0781 18.0328 31.4672 12.4218 24.5109 12.4218ZM24.5109 33.1593C20.0156 33.1593 16.3406 29.4953 16.3406 24.989C16.3406 20.4828 20.0047 16.8187 24.5109 16.8187C29.0172 16.8187 32.6812 20.4828 32.6812 24.989C32.6812 29.4953 29.0062 33.1593 24.5109 33.1593ZM40.5234 11.9078C40.5234 13.5375 39.2109 14.839 37.5922 14.839C35.9625 14.839 34.6609 13.5265 34.6609 11.9078C34.6609 10.289 35.9734 8.97654 37.5922 8.97654C39.2109 8.97654 40.5234 10.289 40.5234 11.9078ZM48.8469 14.8828C48.6609 10.9562 47.764 7.4781 44.8875 4.61247C42.0219 1.74685 38.5437 0.849976 34.6172 0.653101C30.5703 0.423413 18.4406 0.423413 14.3937 0.653101C10.4781 0.839038 7 1.73591 4.12344 4.60154C1.24688 7.46716 0.360946 10.9453 0.164072 14.8718C-0.0656158 18.9187 -0.0656158 31.0484 0.164072 35.0953C0.350009 39.0218 1.24688 42.5 4.12344 45.3656C7 48.2312 10.4672 49.1281 14.3937 49.325C18.4406 49.5547 30.5703 49.5547 34.6172 49.325C38.5437 49.139 42.0219 48.2422 44.8875 45.3656C47.7531 42.5 48.65 39.0218 48.8469 35.0953C49.0765 31.0484 49.0765 18.9297 48.8469 14.8828ZM43.6187 39.4375C42.7656 41.5812 41.114 43.2328 38.9594 44.0968C35.7328 45.3765 28.0766 45.0812 24.5109 45.0812C20.9453 45.0812 13.2781 45.3656 10.0625 44.0968C7.91875 43.2437 6.26719 41.5922 5.40313 39.4375C4.12344 36.2109 4.41876 28.5547 4.41876 24.989C4.41876 21.4234 4.13438 13.7562 5.40313 10.5406C6.25626 8.39685 7.90782 6.74529 10.0625 5.88122C13.2891 4.60154 20.9453 4.89685 24.5109 4.89685C28.0766 4.89685 35.7437 4.61247 38.9594 5.88122C41.1031 6.73435 42.7547 8.38591 43.6187 10.5406C44.8984 13.7672 44.6031 21.4234 44.6031 24.989C44.6031 28.5547 44.8984 36.2218 43.6187 39.4375Z"
                                    fill="#E571F6"/>
                            </svg>
                        </a>
                    </li>
                </ul>
                <div className="footer__links__smart-contract">Smart contract</div>
            </div>
        </footer>)
}

export default Footer