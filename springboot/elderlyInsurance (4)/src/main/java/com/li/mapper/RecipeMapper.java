package com.li.mapper;

import com.li.pojo.Recipe;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface RecipeMapper {
    List<Recipe> queryAllRecipe();
    Recipe queryRecipeById(int id);
    List<Recipe> queryRecipeByTitle(String title);
}
