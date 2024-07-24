// import React from 'react';
// import { useNavigate } from 'react-router-dom';
//
// import "../Login/css/WithdrawModal.css";
//
//
//
//
//
// function WithdrawModal({ onClose, onConfirmWithdraw }) {
//     const navigate = useNavigate();
//
//     const handleWithdraw = async () => {
//         try {
//             await onConfirmWithdraw();
//             alert('회원 탈퇴가 완료되었습니다.');
//             navigate("/");
//         } catch (error) {
//             alert('회원 탈퇴 중 오류가 발생했습니다.');
//             console.error('Withdrawal error:', error);
//         }
//     };
//
//     return (
//         <>
//             <div className="modal_page">
//                 <div className="modal_page_box">
//                     <div className="withdraw_announce">
//                         정말로 탈퇴하시겠습니까?
//                     </div>
//                     <br />
//                     <div>
//                         <button className="withdraw_yes" onClick={handleWithdraw}>탈퇴하겠습니다</button>
//                     </div>
//                     <div className="withdraw_exit" onClick={onClose}>
//                         X
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }
//
// export default WithdrawModal;