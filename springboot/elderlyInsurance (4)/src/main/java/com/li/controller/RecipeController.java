package com.li.controller;

import com.li.mapper.RecipeMapper;
import com.li.pojo.Recipe;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class RecipeController implements RecipeMapper {

    @Autowired
    private RecipeMapper recipeMapper;

    @Override
    @GetMapping("/queryAllRecipe")
    public List<Recipe> queryAllRecipe() {
        List<Recipe> recipeList = recipeMapper.queryAllRecipe();
        return recipeList;
    }

    @Override
    @GetMapping("/queryRecipeById/{id}")
    public Recipe queryRecipeById(@PathVariable("id") int id) {
        Recipe recipe =recipeMapper.queryRecipeById(id);
        return recipe;
    }

    @Override
    @GetMapping("/queryRecipeByTitle/{title}")
    public List<Recipe> queryRecipeByTitle(@PathVariable("title") String title) {
        List<Recipe> recipeList = recipeMapper.queryRecipeByTitle(title);
        return recipeList;
    }
}
