# Copyright (c) 2018 Robert Haines.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

require "test_helper"

class CFFReferenceTest < Minitest::Test
  include ::CFF::Util

  def setup
    @reference = ::CFF::Reference.new("A Paper", "paper")
  end

  def test_bad_methods_not_allowed
    assert_raises(NoMethodError) do
      @reference.aaaaaaa
    end

    assert_raises(NoMethodError) do
      @reference.Type = "book"
    end
  end
end
