import UserRow from './UserRow.vue';
import CreateUserPopup from './CreateUserPopup.vue';
import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name } from './UserList.vue';

function __VLS_template() {
    let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
    /* Components */
    let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
    let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & typeof __VLS_publicComponent & (new () => { $slots: typeof __VLS_slots; })>;
    let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
    let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
    /* Style Scoped */
    type __VLS_StyleScopedClasses = {};
    let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
    /* CSS variable injection */
    /* CSS variable injection end */
    let __VLS_resolvedLocalAndGlobalComponents!: {} &
        __VLS_WithComponent<'UserRow', typeof __VLS_localComponents, "UserRow", "UserRow", "UserRow"> &
        __VLS_WithComponent<'ElPagination', typeof __VLS_localComponents, "ElPagination", "elPagination", "el-pagination"> &
        __VLS_WithComponent<'CreateUserPopup', typeof __VLS_localComponents, "CreateUserPopup", "CreateUserPopup", "CreateUserPopup">;
    ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div;
    ({} as __VLS_IntrinsicElements).input;
    ({} as __VLS_IntrinsicElements).button; ({} as __VLS_IntrinsicElements).button;
    ({} as __VLS_IntrinsicElements).table; ({} as __VLS_IntrinsicElements).table;
    ({} as __VLS_IntrinsicElements).thead; ({} as __VLS_IntrinsicElements).thead;
    ({} as __VLS_IntrinsicElements).tr; ({} as __VLS_IntrinsicElements).tr;
    ({} as __VLS_IntrinsicElements).th; ({} as __VLS_IntrinsicElements).th;
    ({} as __VLS_IntrinsicElements).tbody; ({} as __VLS_IntrinsicElements).tbody;
    __VLS_components.UserRow;
    // @ts-ignore
    [UserRow,];
    __VLS_components.ElPagination; __VLS_components.elPagination; __VLS_components["el-pagination"];
    // @ts-ignore
    [ElPagination,];
    __VLS_components.CreateUserPopup;
    // @ts-ignore
    [CreateUserPopup,];
    {
        const __VLS_0 = ({} as __VLS_IntrinsicElements)["div"];
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, {});
        ({} as __VLS_IntrinsicElements).div;
        ({} as __VLS_IntrinsicElements).div;
        const __VLS_2 = __VLS_1({ ...{ ...{ onClick: {} as any, }, class: ("ml-40"), }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
        let __VLS_4 = { 'click': __VLS_pickEvent(__VLS_3.emit!, 'click' as const, __VLS_componentProps(__VLS_1, __VLS_2).onClick) };
        __VLS_4 = {
            click: (__VLS_ctx.closeAllPopup)
        };
        {
            const __VLS_5 = ({} as __VLS_IntrinsicElements)["div"];
            const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, {});
            ({} as __VLS_IntrinsicElements).div;
            ({} as __VLS_IntrinsicElements).div;
            const __VLS_7 = __VLS_6({ ...{ ...{}, class: ("flex items-center justify-between"), }, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
            {
                const __VLS_9 = ({} as __VLS_IntrinsicElements)["input"];
                const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, {});
                ({} as __VLS_IntrinsicElements).input;
                const __VLS_11 = __VLS_10({ ...{ ...{}, class: ("px-3 py-2 h-10 m-8 border rounded"), placeholder: ("Search User"), }, }, ...__VLS_functionalComponentArgsRest(__VLS_10));
                const __VLS_12 = __VLS_pickFunctionalComponentCtx(__VLS_9, __VLS_11)!;
                (__VLS_ctx.search);
            }
            {
                const __VLS_13 = ({} as __VLS_IntrinsicElements)["button"];
                const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, {});
                ({} as __VLS_IntrinsicElements).button;
                ({} as __VLS_IntrinsicElements).button;
                const __VLS_15 = __VLS_14({ ...{ ...{ onClick: {} as any, }, class: ("py-2 h-10 m-8 border rounded px-3 bg-sky-600 text-white cursor-pointer"), }, }, ...__VLS_functionalComponentArgsRest(__VLS_14));
                const __VLS_16 = __VLS_pickFunctionalComponentCtx(__VLS_13, __VLS_15)!;
                let __VLS_17 = { 'click': __VLS_pickEvent(__VLS_16.emit!, 'click' as const, __VLS_componentProps(__VLS_14, __VLS_15).onClick) };
                __VLS_17 = {
                    click: (__VLS_ctx.showCreatePopup)
                };
                (__VLS_16.slots!).default;
            }
            (__VLS_8.slots!).default;
        }
        {
            const __VLS_18 = ({} as __VLS_IntrinsicElements)["table"];
            const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, {});
            ({} as __VLS_IntrinsicElements).table;
            ({} as __VLS_IntrinsicElements).table;
            const __VLS_20 = __VLS_19({ ...{ ...{}, class: ("w-4/5 mx-auto px-8"), }, }, ...__VLS_functionalComponentArgsRest(__VLS_19));
            const __VLS_21 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20)!;
            {
                const __VLS_22 = ({} as __VLS_IntrinsicElements)["thead"];
                const __VLS_23 = __VLS_asFunctionalComponent(__VLS_22, {});
                ({} as __VLS_IntrinsicElements).thead;
                ({} as __VLS_IntrinsicElements).thead;
                const __VLS_24 = __VLS_23({ ...{ ...{}, class: ("text-xs text-gray-700 uppercase py-4 bg-white"), }, }, ...__VLS_functionalComponentArgsRest(__VLS_23));
                const __VLS_25 = __VLS_pickFunctionalComponentCtx(__VLS_22, __VLS_24)!;
                {
                    const __VLS_26 = ({} as __VLS_IntrinsicElements)["tr"];
                    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, {});
                    ({} as __VLS_IntrinsicElements).tr;
                    ({} as __VLS_IntrinsicElements).tr;
                    const __VLS_28 = __VLS_27({ ...{ ...{}, scope: ("col"), class: ("px-6 py-3 bg-white"), }, }, ...__VLS_functionalComponentArgsRest(__VLS_27));
                    const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28)!;
                    for (const [column, index] of __VLS_getVForSourceType((__VLS_ctx.tableColumns)!)) {
                        {
                            const __VLS_30 = ({} as __VLS_IntrinsicElements)["th"];
                            const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, {});
                            ({} as __VLS_IntrinsicElements).th;
                            ({} as __VLS_IntrinsicElements).th;
                            const __VLS_32 = __VLS_31({ ...{ ...{}, key: ((index)), }, }, ...__VLS_functionalComponentArgsRest(__VLS_31));
                            const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32)!;
                            (column);
                            (__VLS_33.slots!).default;
                        }
                        // @ts-ignore
                        [closeAllPopup, search, showCreatePopup, tableColumns,];
                    }
                    (__VLS_29.slots!).default;
                }
                (__VLS_25.slots!).default;
            }
            {
                const __VLS_34 = ({} as __VLS_IntrinsicElements)["tbody"];
                const __VLS_35 = __VLS_asFunctionalComponent(__VLS_34, {});
                ({} as __VLS_IntrinsicElements).tbody;
                ({} as __VLS_IntrinsicElements).tbody;
                const __VLS_36 = __VLS_35({ ...{ ...{}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_35));
                const __VLS_37 = __VLS_pickFunctionalComponentCtx(__VLS_34, __VLS_36)!;
                for (const [user, index] of __VLS_getVForSourceType((__VLS_ctx.filteredUsers)!)) {
                    {
                        let __VLS_38!: 'UserRow' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.UserRow : (typeof __VLS_resolvedLocalAndGlobalComponents)['UserRow'];
                        const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({ ...{ onEdit: {} as any, onDelete: {} as any, }, key: ((user.id)), user: ((user)), getStatusText: ((__VLS_ctx.getStatusText)), showPopup: ((__VLS_ctx.showPopup)), index: ((index)), }));
                        ({} as { UserRow: typeof __VLS_38; }).UserRow;
                        const __VLS_40 = __VLS_39({ ...{ ...{ onEdit: {} as any, onDelete: {} as any, }, key: ((user.id)), user: ((user)), getStatusText: ((__VLS_ctx.getStatusText)), showPopup: ((__VLS_ctx.showPopup)), index: ((index)), }, }, ...__VLS_functionalComponentArgsRest(__VLS_39));
                        const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_38, __VLS_40)!;
                        let __VLS_42 = { 'edit': __VLS_pickEvent(__VLS_41.emit!, 'edit' as const, __VLS_componentProps(__VLS_39, __VLS_40).onEdit) };
                        __VLS_42 = {
                            edit: (__VLS_ctx.showEditPopup)
                        };
                        let __VLS_43 = { 'delete': __VLS_pickEvent(__VLS_41.emit!, 'delete' as const, __VLS_componentProps(__VLS_39, __VLS_40).onDelete) };
                        __VLS_43 = {
                            delete: (__VLS_ctx.onDelete)
                        };
                    }
                    // @ts-ignore
                    [filteredUsers, getStatusText, showPopup, getStatusText, showPopup, showEditPopup, onDelete,];
                }
                (__VLS_37.slots!).default;
            }
            (__VLS_21.slots!).default;
        }
        {
            let __VLS_44!: 'ElPagination' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ElPagination : 'elPagination' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.elPagination : 'el-pagination' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['el-pagination'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElPagination'];
            const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({ ...{ onCurrentChange: {} as any, }, class: (" my-5 flex items-center justify-between"), pageSize: ((5)), layout: ("prev, pager, next"), total: ((__VLS_ctx.totalRecords)), }));
            ({} as { ElPagination: typeof __VLS_44; }).ElPagination;
            const __VLS_46 = __VLS_45({ ...{ ...{ onCurrentChange: {} as any, }, class: (" my-5 flex items-center justify-between"), pageSize: ((5)), layout: ("prev, pager, next"), total: ((__VLS_ctx.totalRecords)), }, }, ...__VLS_functionalComponentArgsRest(__VLS_45));
            const __VLS_47 = __VLS_pickFunctionalComponentCtx(__VLS_44, __VLS_46)!;
            let __VLS_48 = { 'current-change': __VLS_pickEvent(__VLS_47.emit!, 'current-change' as const, __VLS_componentProps(__VLS_45, __VLS_46).onCurrentChange) };
            __VLS_48 = {
                "current-change": (__VLS_ctx.handlePageChange)
            };
        }
        (__VLS_3.slots!).default;
    }
    if (__VLS_ctx.shouldShowPopup()) {
        {
            let __VLS_49!: 'CreateUserPopup' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.CreateUserPopup : (typeof __VLS_resolvedLocalAndGlobalComponents)['CreateUserPopup'];
            const __VLS_50 = __VLS_asFunctionalComponent(__VLS_49, new __VLS_49({ ...{ onClose: {} as any, onCreateNewUser: {} as any, onUpdateUser: {} as any, }, isVisible: ((__VLS_ctx.isCreatePopupVisible)), getUserByID: ((__VLS_ctx.UserToEdit)), EditedID: ((__VLS_ctx.EditedID)), isEdit: ((__VLS_ctx.isEdit)), }));
            ({} as { CreateUserPopup: typeof __VLS_49; }).CreateUserPopup;
            const __VLS_51 = __VLS_50({ ...{ ...{ onClose: {} as any, onCreateNewUser: {} as any, onUpdateUser: {} as any, }, isVisible: ((__VLS_ctx.isCreatePopupVisible)), getUserByID: ((__VLS_ctx.UserToEdit)), EditedID: ((__VLS_ctx.EditedID)), isEdit: ((__VLS_ctx.isEdit)), }, }, ...__VLS_functionalComponentArgsRest(__VLS_50));
            const __VLS_52 = __VLS_pickFunctionalComponentCtx(__VLS_49, __VLS_51)!;
            let __VLS_53 = { 'close': __VLS_pickEvent(__VLS_52.emit!, 'close' as const, __VLS_componentProps(__VLS_50, __VLS_51).onClose) };
            __VLS_53 = {
                close: (__VLS_ctx.closeCreatePopup)
            };
            let __VLS_54 = { 'createNewUser': __VLS_pickEvent(__VLS_52.emit!, 'createNewUser' as const, __VLS_componentProps(__VLS_50, __VLS_51).onCreateNewUser) };
            __VLS_54 = {
                createNewUser: (__VLS_ctx.createNewUser)
            };
            let __VLS_55 = { 'updateUser': __VLS_pickEvent(__VLS_52.emit!, 'updateUser' as const, __VLS_componentProps(__VLS_50, __VLS_51).onUpdateUser) };
            __VLS_55 = {
                updateUser: (__VLS_ctx.updateUser)
            };
        }
        // @ts-ignore
        [totalRecords, totalRecords, handlePageChange, shouldShowPopup, isCreatePopupVisible, UserToEdit, EditedID, isEdit, isCreatePopupVisible, UserToEdit, EditedID, isEdit, closeCreatePopup, createNewUser, updateUser,];
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots!: {};
    return __VLS_slots;
}
