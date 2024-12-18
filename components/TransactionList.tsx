import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Category, Transaction } from '../types'
import TransactionListItem from './TransactionListItem';

const TransactionList = ({ transactions, categories, deleteTransaction }: {
    categories: Category[];
    transactions: Transaction[];
    deleteTransaction: (id: number) => Promise<void>;
}) => {
    return (
        <View style={{ gap: 15 }}>
            {transactions.map((transaction) => {
                const categoryOfTransaction = categories.find(
                    (category) => category.id == transaction.category_id
                );
                return (
                    <TouchableOpacity
                        key={transaction.id}
                        activeOpacity={.7}
                        onLongPress={() => deleteTransaction(transaction.id)}
                    >
                        <TransactionListItem
                            transaction={transaction}
                            categoryInfo={categoryOfTransaction}
                        />
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}

export default TransactionList