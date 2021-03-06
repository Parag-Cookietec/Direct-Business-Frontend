export const APIConst = {
    LOGIN: 'edp/oauth/token',
    user: 'edp/api/getuser',
    LOGOUT: 'edp/oauth/revoketoken',
    EXTEND_SESSION: 'edp/oauth/token/refreshtoken',
    GET_CONDITIONAL_IDS: 'edp/lulookupinfo/getbyname/201',
    STATUS_CODE: {
        AUTHENTICATION_FAILED: 401
    },
    ATTACHMENT: {
        GET_ALL: 'attachment/201',
        ADD: 'attachment/101',
        DELETE: 'attachment/501',
        DOWNLOAD: 'attachment/901',
        UPLOAD_ATTACHMENT: 'common/attachment/101',
        LOAD_ATTACHMENT_LIST: 'common/attachment/201',
        DOWNLOAD_ATTACHMENT: 'common/attachment/filenet/download/901',
        DELETE_ATTACHMENT: 'common/attachment/501',
        VIEM_ATTACHMENT: 'common/attachment/filenet/imagedownload/901',
        ATTACHMENT_TYPE: 'common/attachment/601',
    },
   
    HEADER: {
        GET_ALL_FINANCIAL_YEARS: 'edp/msfinancialyear/201',
        GET_ALL_DEPARTMENTS: 'edp/msdepartment/getbyuserid/201',
        GET_ALL_DEPT: 'edp/msdepartment/idcode/201',
        GET_ALL_BRANCH: 'edp/msbranch/getbydepartmentid/301',
        // GET_ALL_ESTIMATE_FROM: 'edp/msoffice/getbyuserid/201',
        GET_ESTIMATE_FROM: 'edp/msoffice/estimationfromname',
        GET_ALL_ESTIMATE_FOR: 'edp/msoffice/estimationby/getbyofficeid/809',
        GET_ALL_DEMAND: 'budget/msdmand/getbydepartmentid/301',
        GET_REVENUE_CAPITAL: 'edp/lulookupinfo/getbyname/201',
        GET_ALL_MAJOR_HEAD: 'budget/msmajorhead/getbydemandid/301',
        GET_ALL_SUB_MAJOR_HEAD: 'budget/mssubmajorhead/getbymajorheadid/301',
        GET_SUB_MAJOR_HEAD_BYMAJOR_ID: 'budget/mssubmajorhead/bymajorid/301',
        GET_ALL_MINOR_HEAD: 'budget/msminorrhead/getbysubmajorheadid/301',
        GET_ALL_MINOR_HEAD_BYMAJOR_ID: 'budget/msminorrhead/findByMajorAndSubMajorHead',
        GET_ALL_SUB_HEAD: 'budget/mssubhead/getbyminorheadid/301',
        GET_ALL_SUB_HEAD_BYMAJOR_ID: 'budget/mssubhead/findSubHeadByMinorHeadAndSubMajorId',
        GET_ALL_DETAIL_HEAD: 'budget/detailhead/getbysubheadid/301',
        GET_ALL_DETAIL_HEAD_BYMAJOR_ID: 'budget/detailhead/findBySubMajorHeadId',
        SCHEME_LIST: 'budget/msschemetype/getactiveschemetypes/201',
        FORM_LIST: 'budget/msform/getactiveform/201',
        ITEM_CATEGORY_LIST: 'budget/msitemcategory/getactivecategory/201',
        GET_ALL_OBJECT_HEAD: 'budget/msobjecthead/getAllObjectHead',
        GET_RECIPET_OBJECT_HEAD: 'budget/receiptObjecthead/getAllObjectHead',
        GET_MONTH: 'tpp/ad/common/fetchLookupByName'
    },
    PROFILE: {
        USER_PROFILE: 'edp/msuser/userphoto/201',
        SWITCH_POST: 'edp/oauth/changepost'
    },

    SEARCH: {
        SEARCH_ALL: 'budget/sc/establishmentDetailHeader/201'
    },

    DATA_UPDATION_HISTORY: {
        PVU: {
            PERSONAL_DETAIL: 'pvu/employe/employeehistoryId/301',
            ADDRESS: 'pvu/employe/getAddressHistoryByEmpId/301',
            NOMINEE_DETAIL: 'pvu/employe/getNomineeHistoryByEmpId/301',
            QUALIFICATION: 'pvu/employequalification/getQualificationHistoryByEmpId/301',
            EXAM_DETAIL: 'pvu/employequalification/getExamDetailHistoryByEmpId/301',
            CCE_EXAM: 'pvu/employequalification/getCceExamDetailHistoryByEmpId/301',
            LANGUAGE_EXAM: 'pvu/employequalification/getLangExamDetailHistoryByEmpId/301',
            EMPLOYEE_HISTORY: 'pvu/employeedepartment/getPrvHistoryByEmpId/301',
            DEPARTMENT_DETAIL: 'pvu/employeedepartment/getDeptHistoryDetailsByEmpId/301'
        }
    },

    NOTIFICATION: {
        GET_NOTIFICATION_LIST: 'notification/v3/getsystemnotification/201',
        GET_NOTIFICATION_COUNT: 'notification/v3/getsystemnotificationcnt/201',
        UPDATE_NOTIFICATION_COUNT: 'bpse/registration/updateNotificationCount/201'
    },
    Institutional_Loan_Details:{
        GET_Institutional_Loan_Details: 'dmo/institutionalloan/201',
        GET_Institutional_Loan_Memo: 'dmo/institutionalloanmemo/201',
        DELETE_Loan_Memo: 'dmo/institutionalloanmemo/deleteInstitution',
        SAVE_OR_UPDATE_Institutional_Loan: 'dmo/institutionalloan/101',
        //GET_Cheque_Details_Recived: 'dmo/institutionalloan/101',
        Memo_Generation_Details: 'dmo/institutionalloanmemo/101',
        GET_Institute_Loan_Approved: 'dmo/institutionalloan/approved',
        GET_All_Institute_Names: 'dmo/guarantee/entry/304',
        GET_All_Designation_Names: 'dmo/guarantee/entry/305',
        GET_All_Department_Names: 'dmo/guarantee/entry/302',
        GET_All_Loan_Recieved:'dmo/dpentrysheet/institutionalloan',
        GET_All_Ref:'dmo/institutionalloan/getAllRef',	
        GET_By_Ref:'dmo/institutionalloan/getByRef',  
        GET_Cheque_Details_For_Payment:'dmo/institutionalloanmemo/getAllMemo',
        GET_Payable_options:'edp/lulookupinfo/getbyparentlookupid', 
        Add_Details_Loan_Management:'dmo/institutionalloan/401',
        Update_Memo_No_And_Memo_Date:'dmo/institutionalloanmemo/updateByRef',
        Get_Memo_Repayment_By_Reference_No:'dmo/institutionalloanmemo/getAllMemoRepay',        
        Get_Reference_By_Institute:'dmo/institutionalloan/getByInstitute',
        GET_All_Memo_For_Delete :'dmo/institutionalloanmemo/getAllMemoForDelete'
    },
    Remove_Loan:{
        GET_Type_Of_Loan:'edp/lulookupinfo/getbyparentlookupid',
        GET_Loan_Purpose:'dmo/guarantee/entry/306',
        GET_Sanction_Number:'dmo/removeloan/sanction',
        GET_Loan_Discription: 'dmo/removeloan/loanDesc',
        GET_Institutes:'dmo/removeloan/institute',
        GET_Search:'dmo/removeloan/search',
        DELETE_Loan:'dmo/removeloan/delete',
        GET_Tranche:'dmo/removeloan/tenche'
    }
};
