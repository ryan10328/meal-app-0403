import { FlatList, ListRenderItemInfo } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTitle";
import Category from "../models/category";

const renderCategoryItem = (category: ListRenderItemInfo<Category>) => {
  return (
    <CategoryGridTitle
      title={category.item.title}
      color={category.item.color}
      id={category.item.id}
    />
  );
};

const CategoriesScreen = () => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
